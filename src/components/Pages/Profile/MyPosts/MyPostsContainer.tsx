import React from "react";
import {
    addPostActionCreator,
    newPostElementActionCreator, postsType
} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {Dialogs} from "../../Dialogs/Dialogs";
import {AppStateType} from "../../../../redux/redux-store";
import { Dispatch } from "redux";
import {MyPosts} from "./MyPosts";


type mapStateToPropsType = {
    posts: postsType
    newPostText: string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
}

type mapDispatchToPropsType = {
    onInputChange: (text: string) => void,
    addPost: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onInputChange: (text: string) => {
            const action = newPostElementActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer