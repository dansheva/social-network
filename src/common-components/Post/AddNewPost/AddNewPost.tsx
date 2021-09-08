import React, {LegacyRef, RefObject, useState} from "react";
import {PostAvatar} from "../PostAvatar/PostAvatar";
import {PostIt} from "./PostIt/PostIt";
import s from "./AddNewPost.module.css"

type AddNewPostType = {
    addPost: () => void
    newPostText: string
    updateNewPostText: (value: string) => void
}

export function AddNewPost(props: AddNewPostType) {

    let newPostElement = React.createRef<HTMLInputElement>();

    const onInputChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value;
            props.updateNewPostText(text);
        }
    }

    return (
        <div className={`${s.new_post} box_shadow`}>
            <PostAvatar/>
            <input onChange={onInputChange}
                   ref={newPostElement}
                   className={s.input}
                   value={props.newPostText}
                   placeholder={"What's new, Danik?"}
                   type="text"/>
            <PostIt updateNewPostText={props.updateNewPostText}
                    addPost={props.addPost}
                    newPostElement={newPostElement}
                    newPostText={props.newPostText}/>
        </div>
    )
}