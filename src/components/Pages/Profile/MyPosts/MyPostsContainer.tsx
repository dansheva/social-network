import React from "react";
import {ActionsTypes} from "../../../../redux/store";
import {
    addPostActionCreator,
    newPostElementActionCreator,
    postsType,
    profileType
} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {EmptyObject, Store} from "redux";
import {dialogsType} from "../../../../redux/dialogs-reducer";

type PropsType = {
    store: Store<EmptyObject & {profile: profileType, dialogs: dialogsType}>
}

export const MyPostsContainer = (props: PropsType) => {

    const dispatch = props.store.dispatch
    const posts = props.store.getState().profile.posts
    const newPostText = props.store.getState().profile.newPostText



    const onInputChange = (text: string) => {
        const action = newPostElementActionCreator(text);
        dispatch(action);
    }

    const addPostOnClick = () => {
        dispatch(addPostActionCreator());
    }

    return (
        <MyPosts posts={posts}
                 newPostText={newPostText}
                 onInputChange={onInputChange}
                 addPost={addPostOnClick}/>)
}