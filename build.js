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
      shim("react", "Object.assign(exports, BdApi.React, { default: BdApi.React });"),
      shim("react-spring", "const rs = BdApi.Webpack.getModule(m => m.useSpring);Object.assign(exports, rs, { default: rs });"),
      shim("highlight.js", "const hljs = BdApi.Webpack.getModule(m => m.highlight);Object.assign(exports, hljs, { default: hljs });")
    ]
  });
  const pkg = require("./package.json");
  const meta = {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    author: pkg.author
  };
  writeFileSync("dist/EnhanceCodeBlocks.plugin.js", `/**\n${Object.entries(meta).map(([ k, v ]) => ` * @${k} ${v}`).join("\n")}\n */\n${readFileSync("dist/EnhanceCodeBlocks.plugin.js", "utf-8")}`);
  console.log("Built");
})();