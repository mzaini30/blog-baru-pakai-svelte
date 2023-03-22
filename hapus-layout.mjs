import { glob } from "glob";
import { readFile, writeFile } from "fs/promises";

const files = await glob("./src/routes/post/*.mdx");
for (let x of files) {
  let content = await readFile(x, "utf-8");
  content = content.replace(/layout:.*/, "");
  await writeFile(x, content);
}
