import React from "react";
import {Post} from "../../../../common-components/Post/Post";
import s from "./MyPosts.module.css"
import {AddNewPost} from "../../../../common-components/Post/AddNewPost/AddNewPost";
import {postsType} from "../../../../redux/state";

type PropsType = {
    posts: postsType
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
            <AddNewPost/>
            <div className="my_posts">
                {posts}
            </div>
        </div>
    )
}