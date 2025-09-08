import { Router } from "express";
import {getAllPosts} from "../controllers/posts.controller.js"

const router = Router();

router.get("/post",getAllPosts);


export default router;