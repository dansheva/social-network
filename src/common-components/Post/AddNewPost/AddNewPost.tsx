import React from "react";
import {PostAvatar} from "../PostAvatar/PostAvatar";
import {PostIt} from "./PostIt/PostIt";
import s from "./AddNewPost.module.css"

type AddNewPostType = {
    newPostText: string
    onInputChange: (text: string) => void
    addPost: () => void
}

export function AddNewPost(props: AddNewPostType) {

    let newPostElement = React.createRef<HTMLInputElement>();

    const onInputChange = () => {
        if (newPostElement.current) {
            props.onInputChange(newPostElement.current.value)
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
            <PostIt addPost={props.addPost}
                    newPostElement={newPostElement}/>
        </div>
    )
}