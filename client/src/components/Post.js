const Post = (props) => {
    return (
        <div id="post" className="card border border-1">
            <h5 id="post-title" className="card-header fw-bold">{/*{props.post.title}*/}</h5>
            <div id="post-content" className="card-body">
                <p className="card-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam massa quam, pulvinar at orci eget, blandit pharetra est. Fusce nec tincidunt diam. Curabitur vitae risus aliquam, convallis ligula quis, lacinia dolor. Nam purus lacus, iaculis nec imperdiet sed, finibus et arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ac metus sed diam aliquam porta. Nunc molestie, justo nec tincidunt suscipit, augue purus iaculis quam, ac eleifend metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam massa quam, pulvinar at orci eget, blandit pharetra est. Fusce nec tincidunt diam. Curabitur vitae risus aliquam, convallis ligula quis, lacinia dolor. Nam purus lacus, iaculis nec imperdiet sed, finibus et arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ac metus sed diam aliquam porta. Nunc molestie, justo nec tincidunt suscipit, augue purus iaculis quam, ac eleifend metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam massa quam, pulvinar at orci eget, blandit pharetra est. Fusce nec tincidunt diam. Curabitur vitae risus aliquam, convallis ligula quis, lacinia dolor. Nam purus lacus, iaculis nec imperdiet sed, finibus et arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ac metus sed diam aliquam porta. Nunc molestie, justo nec tincidunt suscipit, augue purus iaculis quam, ac eleifend metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam massa quam, pulvinar at orci eget, blandit pharetra est. Fusce nec tincidunt diam. Curabitur vitae risus aliquam, convallis ligula quis, lacinia dolor. Nam purus lacus, iaculis nec imperdiet sed, finibus et arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ac metus sed diam aliquam porta. Nunc molestie, justo nec tincidunt suscipit, augue purus iaculis quam, ac eleifend metus.</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            <div id="post-meta" className="card-body">
                <div id="post-info">Steve - 7/2/2022</div>
                <button id="post-save">Save ★</button>
                <button id="post-edit">Edit ✎</button>
                <button id="post-delete">Delete ✖</button>
            </div>
        </div>
    )
}

export default Post;

