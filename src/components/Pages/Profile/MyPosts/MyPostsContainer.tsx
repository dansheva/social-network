import React from "react";
import {ActionsTypes, postsType} from "../../../../redux/store";
import {addPostActionCreator, newPostElementActionCreator} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type PropsType = {
    posts: postsType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const MyPostsContainer = (props: PropsType) => {

    const onInputChange = (text: string) => {
        const action = newPostElementActionCreator(text);
        props.dispatch(action);
    }

    const addPostOnClick = () => {
        props.dispatch(addPostActionCreator());
    }

    return (
        <MyPosts posts={props.posts}
                 newPostText={props.newPostText}
                 onInputChange={onInputChange}
                 addPost={addPostOnClick}/>)
}