const esbuild = require("esbuild");
const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

function shim(id, contents) {
  return {
    name: `shim-${id}`,
    setup(build) {
      build.onResolve({ filter: new RegExp(`^${id}$`) }, () => ({ path: id, namespace: `shim-${id}` }));
      build.onLoad({ filter: /.*/, namespace: `shim-${id}` }, () => ({ contents, resolveDir: join(__dirname, "src") }));
    }
  }
};

const exportModule = (module) => `const module = ${module};Object.assign(exports, module);if (!("default" in module)) Object.assign(exports, { default: module });`;

(async () => {
  if (!process.argv.includes("--no-build")) {
    await esbuild.build({
      entryPoints: [ join(__dirname, "index.js") ],
      outfile: "dist/EnhanceCodeBlocks.plugin.js",
      platform: "node",
      bundle: true,
      format: "cjs",
      minifySyntax: true,
      loader: { ".css": "text" },
      ignoreAnnotations: true,
      jsxFactory: "BdApi.React.createElement",
      plugins: [
        shim("react", exportModule("BdApi.React")),
        shim("react-spring", exportModule("BdApi.Webpack.getModule(m => m.useSpring)")),
        shim("highlight.js", exportModule("BdApi.Webpack.getModule(m => m.highlight)"))
      ]
    });
    const pkg = require("./package.json");
    const meta = {
      name: pkg.name,
      description: pkg.description,
      version: pkg.version,
      author: pkg.author
    };
  
    const pluginData = readFileSync("dist/EnhanceCodeBlocks.plugin.js", { encoding: "utf-8" });
    
    const pluginCode = `/**\n${Object.entries(meta).map(([ k, v ]) => ` * @${k} ${v}`).join("\n")}\n */\n${pluginData}`;
    writeFileSync("dist/EnhanceCodeBlocks.plugin.js", pluginCode, { encoding: "utf-8" });
    console.log("Built");
  
    if (process.argv.includes("--bd")) {
      const index = process.argv.findIndex(arg => arg.includes("--bd-path="));
      let path;
      if (~index) { path = process.argv[index].replace("--bd-path=", ""); }
      else { path = join(process.env.APPDATA ? process.env.APPDATA : "", "betterdiscord"); }
      writeFileSync(join(path, "plugins", "EnhanceCodeBlocks.plugin.js"), pluginCode, { encoding: "utf-8" });
      console.log("Added to BD");
    };
  }

  const todos = require("./TODO.json");
  const index = process.argv.findIndex(arg => arg.includes("--todo="));
  if (~index) {
    for (const id of process.argv[index].replace("--todo=", "").split(",")) {
      const todo = todos.findIndex((todo) => todo.id === id);
      if (~index) todos.splice(todo, 1);
    };
    writeFileSync("./TODO.json", JSON.stringify(todos, null, "\t"), { encoding: "utf-8" });
  };
  if (todos.length) {
    console.log("~~~ TODO ~~~");
    for (const todo of todos) console.log(`[${todo.priority}-${todo.id}] ${todo.name}`);
  };
})();