import { Router } from "express";
import {getAllPosts,getPostById} from "../controllers/posts.controller.js"

const router = Router();

router.get("/post",getAllPosts);
router.get("/post/:id",getPostById);



export default router;