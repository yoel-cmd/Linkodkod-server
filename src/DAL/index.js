import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

async function readMyFile() {
  try {
    const data = await readFile(path.join(process.cwd(), "../../DB/posts.json"),
      "utf8"
    );

    // console.log("File contents:", data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}
