const Post = (props) => {
    return (
        <div id={props.post._id} className="post card border border-1">
            <h5 className="post-title card-header fw-bold">{props.post.title}</h5>
            <div className="post-content card-body">
                <p className="card-text ">{props.post.content}</p>
            </div>
            <div className="post-meta card-body">
                <div className="post-info">{props.post.dateCreated.substring(0, 10)}</div>
                <button className="post-save">Save ★</button>
                <button className="post-edit">Edit ✎</button>
                <button onClick={() => props.deletePost(props.post._id, props.post.userId)} 
                        className="post-delete"
                        type="submit">
                            Delete ✖
                </button>
                
            </div>
        </div>


    )
}

export default Post;

