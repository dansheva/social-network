import React from "react";
import {PostAvatar} from "../PostAvatar/PostAvatar";
import {PostIt} from "./PostIt/PostIt";
import s from "./AddNewPost.module.css"

export function AddNewPost() {
    return(
        <div className={`${s.new_post} box_shadow`}>
            <PostAvatar />
            <input className={s.input} placeholder={"What's new, Danik?"} type="text"/>
            <PostIt />
        </div>
    )
}