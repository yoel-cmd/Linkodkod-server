// src/routes/posts.js
import { Router } from "express";
import { getAllPosts,getPostById,addPost,} from "../controllers/posts.controller.js";
import { authMiddleware } from "../middlewares/auth.js";
const router = Router();

router.post("/post", authMiddleware, getAllPosts);
router.post("/post/:id", authMiddleware, getPostById);
router.post("/create-post", authMiddleware, addPost);
export default router;
