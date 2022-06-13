// imports
const mongoose = require("mongoose");
const User = mongoose.model('User');

// Schema
const postSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dateCreated: { type: Date, default: Date.now }
});

// Model of schema
const Post = mongoose.model("Post", postSchema);

// CRUD functions
// CREATE a post
async function createPost(userId, content) {
    userId = mongoose.Types.ObjectId(userId);
    const user = await User.findById(userId);
    if (!user) throw Error("User not found");
    const newPost = await Post.create({
        userId: userId,
        content: content
    })
    return newPost;
}

// READ 
// Returns info about a singular post
async function getOnePost(postId) {
    const post = await getPost(postId);
    if (!post) throw Error('Post not found');
    return post;
}

// Returns all posts made by a particular user
async function getAllPosts(userId) {
    const posts = await Post.find({ userId: userId });
    if (!posts.length) throw Error('User has no posts');
    return posts;
}

// UDPATE 
// Updates post content
async function updatePostContent(postId, content, userId) {
    await userMadePost(postId, userId);
    const post = await Post.updateOne({ "_id": postId }, {$set: { content: content }});
    return post;
}

// DELETE post
async function deletePost(postId, userId) {
    await userMadePost(postId, userId);
    await Post.deleteOne({ "_id": postId });
}

// utility methods
// returns post associated with id
async function getPost(postId) {
    return await Post.findById(postId);
}

// checks if post is associated with user's id
async function userMadePost(postId, userId) {
    const post = await getPost(postId);
    if(!post) throw Error('Post not found')
    if(post.userId != userId) throw Error('A user cannot edit a post they did not make');
}

module.exports = {createPost, getOnePost, getAllPosts, updatePostContent, deletePost};