import { Router } from "express";
import {getAllPosts,getPostById,addPost} from "../controllers/posts.controller.js"

const router = Router();

router.get("/post",getAllPosts);
router.get("/post/:id",getPostById);
router.post("/create-post",addPost);



export default router;