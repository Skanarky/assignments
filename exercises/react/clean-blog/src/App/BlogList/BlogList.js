
import React from "react";

import data from "./data.json";
import BlogPost from "./BlogPost/BlogPost";

const BlogList = () => {
    return (
        <ul>
            {data.map((objPost, index) => <BlogPost post={objPost} key={objPost.title + index} />)}
            <div>
                <button>OLDER POSTS -></button>
            </div>
            {/* tags and/or comp and/or destructing data + comp HERE */}
        </ul>
    )
}

export default BlogList;