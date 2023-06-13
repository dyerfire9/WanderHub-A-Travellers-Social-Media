import express from 'express';
const router = express.Router();
import {getPosts, createPost} from '../controllers/postsController.js'

router.get('/', getPosts)
router.post('/', createPost)

export default router