import { readMyFile } from "../DAL/index.js";

export async function AllPost() {
  const data = await readMyFile();
  return data;
}

export async function PostBiId(id) {
  const data = await readMyFile();
  const jsondata = JSON.parse(data);
  const post = jsondata.find((p) => p.id === id);
  if (post) {
    return post;
  }
  return null
}
export async function updatePost(id) {}
export async function deletePost(id) {}
