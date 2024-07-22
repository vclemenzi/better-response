import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  minify: "terser",
  dts: true,
});
