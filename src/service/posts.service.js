import { readMyFile, writeToFile } from "../DAL/index.js";
import { v4 as uuidv4 } from "uuid";

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
  return null;
}
export async function CraetPost(post) {    
  const id = uuidv4();
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

const newPost= {
    ...post,
    id:id,
    emoji:0,
    time:showTime
};
  const res = await writeToFile(newPost); 
  return res;
}
export async function updatePost(id) {}
export async function deletePost(id) {}
