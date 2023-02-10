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

const exportModule = (module) => `const module = ${module};Object.assign(exports, module);if (!module.default) Object.assign(exports, { default: module });`;

(async () => {
  await esbuild.build({
    entryPoints: [ join(__dirname, "index.js") ],
    outfile: "dist/EnhanceCodeBlocks.plugin.js",
    platform: "node",
    bundle: true,
    format: "cjs",
    minifySyntax: true,
    loader: { ".css": "text" },
    ignoreAnnotations: true,
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

  const pluginCode = `/**\n${Object.entries(meta).map(([ k, v ]) => ` * @${k} ${v}`).join("\n")}\n */\n${readFileSync("dist/EnhanceCodeBlocks.plugin.js", "utf-8")}`;
  writeFileSync("dist/EnhanceCodeBlocks.plugin.js", pluginCode);
  console.log("Built");

  if (process.argv.includes("--bd")) {
    const index = process.argv.findIndex(arg => arg.includes("--bd-path="));
    let path;
    if (~index) { path = process.argv[index].replace("--bd-path=", ""); }
    else { path = join(process.env.APPDATA ? process.env.APPDATA : "", "betterdiscord"); }
    writeFileSync(join(path, "plugins", "EnhanceCodeBlocks.plugin.js"), pluginCode);
    console.log("Added to BD");
  };
})();