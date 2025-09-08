import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export async function readMyFile() {
  try {
    const data = await readFile(path.join(process.cwd(), "./DB/posts.json"),
      "utf8"
    );
    return data
  } catch (error) {
    console.error("Error reading file:", error);
  }
}
