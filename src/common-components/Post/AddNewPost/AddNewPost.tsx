import React, {LegacyRef, RefObject} from "react";
import {PostAvatar} from "../PostAvatar/PostAvatar";
import {PostIt} from "./PostIt/PostIt";
import s from "./AddNewPost.module.css"

type AddNewPostType = {
    addPost: (message: string) => void
}

export function AddNewPost(props: AddNewPostType) {

    let newPostElement = React.createRef<HTMLInputElement>();

    return(
        <div className={`${s.new_post} box_shadow`}>
            <PostAvatar />
            <input ref={newPostElement} className={s.input} placeholder={"What's new, Danik?"} type="text"/>
            <PostIt addPost={props.addPost} newPostElement={newPostElement} />
        </div>
    )
}