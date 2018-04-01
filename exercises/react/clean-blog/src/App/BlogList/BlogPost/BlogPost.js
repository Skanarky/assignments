
import React from "react";

const BlogPost = (props) => {
    return (
        <li>
            <h2>{props.post.title}</h2>
            <h3>{props.post.subTitle}</h3>
            <h5>Posted by <span>{props.post.author}</span> on <span>{props.post.date}</span></h5>
        </li>
    )
}

export default BlogPost;