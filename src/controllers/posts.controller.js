import { AllPost, PostBiId, CraetPost,AllUsers,CraetUser } from "../service/posts.service.js";

//----------------------------post---------------------------------
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

export async function addPost(req, res) {
  try {
    const data = req.body;
    const val = await CraetPost(data);
    return res.status(201).json(val);
  } catch (error) {
    console.error("Error loading posts:", err);
    return res.status(500).json(err);
  }
}


//----------------------------users---------------------------------
export async function getAllUsers(req, res) {
  try {
    const data = await AllUsers();

    return res.json(data);
  } catch (err) {
    console.error("Error loading posts:", err);
    return res.status(500).json(err);
  }
}

export async function addUser(req, res) {
  try {
    const data = req.body;
    const val = await CraetUser(data);
    return res.status(201).json(val);
  } catch (error) {
    console.error("Error loading posts:", err);
    return res.status(500).json(err);
  }
}
