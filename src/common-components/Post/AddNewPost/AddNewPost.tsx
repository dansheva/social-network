import React, {LegacyRef, RefObject} from "react";
import {PostAvatar} from "../PostAvatar/PostAvatar";
import {PostIt} from "./PostIt/PostIt";
import s from "./AddNewPost.module.css"

export function AddNewPost() {

    let newPostElement = React.createRef<HTMLInputElement>();

    return(
        <div className={`${s.new_post} box_shadow`}>
            <PostAvatar />
            <input ref={newPostElement} className={s.input} placeholder={"What's new, Danik?"} type="text"/>
            <PostIt newPostElement={newPostElement} />
        </div>
    )
}