// src/service/posts.service.js
import { readAllPosts, writeAllPosts } from "../DAL/index.js";
import { v4 as uuidv4 } from "uuid";

export async function getAll() {
  return await readAllPosts();
}
export async function PostBiId(id) {
  const data = await readAllPosts();
  const post = data.find((p) => p.id === id);
  if (post) {
    return post;
  }
  return null;
}
export async function createPost(post) {
 const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const newPost = {
     id: uuidv4(),
      emoji: 0,
       time:showTime,
        ...post };   
  const data = await readAllPosts();
  data.push(newPost);
  await writeAllPosts(data);
  return newPost;
}
