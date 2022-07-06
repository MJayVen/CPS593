import { fetchData } from '../../main';
import Post from '../Post';
import React, { useState, useEffect } from "react";

const ShowPosts = (props) => {
    const userId = props.userId;
    // posts state
    const [userPosts, setUserPosts] = useState({
        posts: []
    });
    const { posts } = userPosts;

    // new post state
    const [newPost, setNewPost] = useState({
        title: '',
        content: ''
    });
    const { title, content } = newPost;

    // display all of a user's posts. only runs fetch once per load
    useEffect(() => {
        const getUserPosts = (userId) => {
            fetchData(`/post/getAll/${userId}`, undefined, "GET")
                .then((response) => {
                    if (!response.message) {
                        let elements = [];
                        response.map(post =>
                            elements.push(<Post key={post._id} post={post} deletePost={deletePost} />)
                        )
                        setUserPosts({ posts: elements });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getUserPosts(userId);
    }, [userId])

    // updates newPost state values on change
    const onChange = (e) => setNewPost({ ...newPost, [e.target.name]: e.target.value });

    // saves new post to database, reloads the page
    const createNewPost = (e) => {
        e.preventDefault();

        fetchData("/post/create",
            {
                userId,
                title,
                content
            },
            "POST")
            .then((data) => {
                // append post to posts
                if (!data.message) {
                    setUserPosts({ posts: [...posts, <Post key={data._id} post={data} deletePost={deletePost} />] });
                }
                // clear title and content
                setNewPost({ title: '', content: '' });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // saves new post to database, reloads the page
    const deletePost = (postId, userId) => {
        fetchData("/post/delete",
            {
                userId,
                postId
            },
            "DELETE")
            .then((data) => {
                if (!data.message) {
                    document.getElementById("show-posts").removeChild(document.getElementById(postId));
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div id="show-posts">
            {/* new post form */}
            <form id="new-post" onSubmit={createNewPost}>
                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        id="new-post-title"
                        name="title"
                        placeholder="An interesting title"
                        onChange={onChange}
                        value={title}
                        required />
                </div>
                <div id="create-post-content" className="mb-3">
                    <textarea className="form-control"
                        id="new-post-content"
                        name="content"
                        placeholder="What's on your mind?"
                        rows="3"
                        onChange={onChange}
                        value={content}
                        required />
                </div>
                <button type="submit" id="new-post-btn">Create new post</button>
            </form>
            {/* all of user's posts */}
            {posts}

        </div>
    );
}

export default ShowPosts;