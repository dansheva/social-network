import React from "react";
import {
    addPostActionCreator, postsType
} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import { Dispatch } from "redux";
import {MyPosts} from "./MyPosts";


type mapStateToPropsType = {
    posts: postsType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profile.posts,
    }
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer