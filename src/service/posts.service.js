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
    console.log("original post",post);
    
  const id = uuidv4();
  console.log("id:",id);
  
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log("time is",showTime);
    
//   post.id = id;
//   post.emoji = 0;
//   post.time = showTime;
const newPost= {
    ...post,
    id:id,
    emoji:0,
    time:showTime
};
console.log("new post:",newPost);


  const res = await writeToFile(newPost);
  console.log("whate beack of servise",res);
  
  return res;
}
export async function updatePost(id) {}
export async function deletePost(id) {}
