// src/controllers/posts.controller.js
import { getAll, PostBiId, creatPost } from "../service/posts.service.js";
export async function getAllPosts(req, res, next) {
  try {
    const data = await getAll();
    res.json(data);
  } catch (e) {
    next(e);
  }
}
export async function getPostById(req, res, next) {
  try {
    const id = req.params.id;
    console.log("id getpostbyid:",id);
    const post = await PostBiId(id);
    if (!post) {
      return res.status(404).json({ok: false,error: { code: "POST_NOT_FOUND", message: "Post not found" },});
    }
    res.json(post);
  } catch (e) {
    next(e);
  }
}

export async function addPost(req, res, next) {
  try {
    const body = req.body || {};
    const post={
        src: body.src,
        desc: body.desc,
        fullName: body.fullName
    };
    const creat = await creatPost(post);
    res.status(201).json(creat);
  } catch (e) {
    next(e);
  }
}
