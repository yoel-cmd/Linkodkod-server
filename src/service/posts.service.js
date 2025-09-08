import { readMyFile } from "../DAL/index.js";

export async function getAllPost() {
  const data = await readMyFile();
  return data
}

export function getPostBiId(id) {

}
export function updatePost(id) {

}
export function deletePost(id) {

}
