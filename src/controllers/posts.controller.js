import { AllPost, PostBiId } from "../service/posts.service.js";

export async function getAllPosts(req, res) {
  try {
    const data = await AllPost();

    return res.json(data);
  } catch (err) {
    console.error("Error loading posts:", err);
    return res.status(500).json(err);
  }
}

export async function getPostById(req, res) {
  try {
    const id = req.params.id;
    const post = await PostBiId(id);  
    if (!post) {     
      console.error("Post not found:");
      return res.status(400);
    }
    return res.json(post);
  } catch (err) {
    console.error("Error loading posts:", err);
    return res.status(500).json(err);
  }
}
