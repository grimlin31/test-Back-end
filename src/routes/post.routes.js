import { Router } from "express";
import { createPost, deletePost, getAllPosts } from "../controllers/post.controller.js";

const routerPost = Router()

routerPost.get('/posts', getAllPosts)

routerPost.post('/posts', createPost)

routerPost.delete('/posts/:id', deletePost)


export {
    routerPost
}
