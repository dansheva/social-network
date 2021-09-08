import React from "react";
import {Post} from "../../../../common-components/Post/Post";
import s from "./MyPosts.module.css"
import {AddNewPost} from "../../../../common-components/Post/AddNewPost/AddNewPost";
import {postsType} from "../../../../redux/state";

type PropsType = {
    posts: postsType
    newPostText: string
    addPost: () => void
    updateNewPostText: (value: string) => void
}

export function MyPosts(props: PropsType) {

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
            <AddNewPost updateNewPostText={props.updateNewPostText} newPostText={props.newPostText} addPost={props.addPost}/>
            <div className="my_posts">
                {posts}
            </div>
        </div>
    )
}