import React, {LegacyRef, RefObject, useState} from "react";
import {PostAvatar} from "../PostAvatar/PostAvatar";
import {PostIt} from "./PostIt/PostIt";
import s from "./AddNewPost.module.css"
import {ActionsTypes} from "../../../redux/state";

type AddNewPostType = {
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export function AddNewPost(props: AddNewPostType) {

    let newPostElement = React.createRef<HTMLInputElement>();

    const onInputChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value;
            props.dispatch({type: "UPDATE-NEW-POST-TEXT", value: text});
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
            <PostIt dispatch={props.dispatch}
                    newPostElement={newPostElement}
                    newPostText={props.newPostText}/>
        </div>
    )
}