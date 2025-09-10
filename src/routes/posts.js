import { Router } from "express";
import {getAllPosts,getPostById,addPost,getAllUsers,addUser} from "../controllers/posts.controller.js"


const router = Router();

router.get("/post",getAllPosts);
router.get("/post/:id",getPostById);
router.post("/create-post",addPost);

//----------------------------users---------------------------------
router.get("/user",getAllUsers);
router.post("/creat-user",addUser);



export default router;