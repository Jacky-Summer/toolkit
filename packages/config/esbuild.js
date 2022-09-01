const esbuild = require("esbuild");
const path = require("path");

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    outdir: path.join(process.cwd(), "dist"),
    bundle: false,
    sourcemap: false,
    minify: false,
    splitting: false,
    color: true,
    format: "cjs",
    platform: "node",
    target: "node14",
  })
  .catch(() => process.exit(1));
