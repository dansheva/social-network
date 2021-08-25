import React from "react";
import {Post} from "../../../common-components/Post/Post";

export function MyPosts() {
    return(
        <div className="posts-container">
            <div className="posts__title">
                My posts
            </div>
            <div className="posts__add-new-post">
                New post
            </div>
            <div className="posts__my-posts">
                <Post />
            </div>
        </div>
    )
}