// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./getPath.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "get-object-path-from-value",
    version: Deno.args[0],
    description: "ObjectPath",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/weweweok/ObjectPath.git",
    },
    bugs: {
      url: "https://github.com/weweweok/ObjectPath/issues",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
