import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "@emotion/react", "@emotion/styled"],
  treeshake: true,
  minify: true,
  target: "es2020",
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
    options.jsx = "automatic";
    options.jsxImportSource = "@emotion/react";
  },
  onSuccess: 'echo "✅ Build completed!"',
});
