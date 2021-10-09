import React from "react";
import {Post} from "../../../../common-components/Post/Post";
import s from "./MyPosts.module.css"
import {AddNewPost} from "../../../../common-components/Post/AddNewPost/AddNewPost";
import {postsType} from "../../../../redux/store";

type PropsType = {
    posts: postsType
    newPostText: string
    onInputChange: (text: string) => void
    addPost: () => void
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
            <AddNewPost addPost={props.addPost} onInputChange={props.onInputChange} newPostText={props.newPostText}/>
            <div className="my_posts">
                {posts}
            </div>
        </div>
    )
}