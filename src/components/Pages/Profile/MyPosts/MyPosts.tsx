import React from "react";
import {Post} from "../../../../common-components/Post/Post";
import s from "./MyPosts.module.css"
import {AddNewPost} from "../../../../common-components/Post/AddNewPost/AddNewPost";
import { postsType } from "../../../../redux/profile-reducer";
import {MyPostsPropsType} from "./MyPostsContainer";

export function MyPosts(props: MyPostsPropsType) {

    let posts: Array<JSX.Element> = props.posts.map(p => {
        return (
            <Post name={p.name} time={p.time} message={p.message}/>
        );
    })

    return (
        <div className={s.posts}>
            <div className={s.title}>
                My posts
            </div>
            <AddNewPost addPost={props.addPost} onInputChange={props.onInputChange} newPostText={props.newPostText}/>
            <div className="my_posts">
                {posts}
            </div>
        </div>
    )
}