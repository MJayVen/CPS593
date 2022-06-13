// imports
const express = require("express");
const Post = require('../models/post');

const router = express.Router();

// create routes to access database
router
    .post('/create', async (req, res) => {
        try {
            const post = await Post.createPost(req.body.userId, req.body.content);
            res.send(post);
        } catch(error) {
            res.status(401).send({ message:error.message });
        }
    })

    .get('/getOne', async (req, res) => {
        try {
            const post = await Post.getOnePost(req.body.postId);
            res.send(post);
        } catch(error) {
            res.status(401).send({ message:error.message });
        }
    })

    .get('/getAll', async (req, res) => {
        try {
            const posts = await Post.getAllPosts(req.body.userId);
            res.send(posts);
        } catch(error) {
            res.status(401).send({ message:error.message });
        }
    })

    .put('/update', async (req, res) => {
        try {
            const post = await Post.updatePostContent(req.body.postId, req.body.content, req.body.userId);
            res.send(post);
        } catch(error) {
            res.status(401).send({ message:error.message });
        }
    })

    .delete('/delete', async (req, res) => {
        try {
            await Post.deletePost(req.body.postId, req.body.userId);
            res.send({ success: "Post deleted!" });
        } catch(error) {
            res.status(401).send({ message:error.message });
        }
    })

// export router for index.js
module.exports = router;