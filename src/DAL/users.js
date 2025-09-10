import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
export async function readAllUsers() {
 
  const data = await readFile(path.join(process.cwd(), "./DB/users.json"), "utf8");
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}
export async function writeAllUsers(users) {
  
  await writeFile(path.join(process.cwd(), "./DB/users.json"), JSON.stringify(users, null, 2), "utf8");
}
