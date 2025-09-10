
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export async function readAllPosts() {

  const data = await readFile(path.join(process.cwd(), "./DB/posts.json"), "utf8");
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}
export async function writeAllPosts(posts) {

  await writeFile(path.join(process.cwd(), "./DB/posts.json"), JSON.stringify(posts, null, 2), "utf8");
}
