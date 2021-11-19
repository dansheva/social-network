import React from "react";
import {PostAvatar} from "../PostAvatar/PostAvatar";
import PostItForm, {PostItFormDataType} from "./PostItForm/PostItForm";
import s from "./AddNewPost.module.css"

type AddNewPostType = {
    addPost: (newPostText: string) => void
}

export function AddNewPost(props: AddNewPostType) {

    const onSubmit = (formData: PostItFormDataType) => {
        props.addPost(formData.newPostText)
        formData.newPostText = ''
    }

    return (
        <div className={`${s.new_post} box_shadow`}>
            <PostAvatar/>
            <PostItForm onSubmit={onSubmit}/>
        </div>
    )
}