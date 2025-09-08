import { getAllPost } from "../service/posts.service.js";

export async function getAllPosts(req, res) {
  try {
    const data = await getAllPost();
    
    return res.json(data)
  } catch (err) {
    console.error("Error loading posts:", err);
    return res.status(500).json(err);
  }
}

