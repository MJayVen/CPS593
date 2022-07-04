import { fetchData } from '../../main';
import Post from '../Post';
import { useState, useEffect } from "react";

const ShowPosts = (props) => {
    
    const [userPosts, setUserPosts] = useState({
        posts: []
    });

    useEffect(() => {
        const getUserPosts = (userId) => {
            fetchData(`/post/getAll/${userId}`, undefined, "GET")
                .then((response) => {
                    if (!response.message) {
                        // const data = response.data;
                        setUserPosts({ posts: response });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getUserPosts(props.userId);
    }, [props.userId])

    const showState = () => console.log(userPosts.posts);

    return (
        <div id="show-posts">
            <button onClick={showState}>Im in hell</button>
            {/* { posts.map((post) =>
                <Post post={post} />
            ) } */}
            <Post />
        </div>
    );
}

export default ShowPosts;