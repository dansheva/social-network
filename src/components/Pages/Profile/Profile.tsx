import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, postsType} from "../../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PropsType = {
    posts: postsType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


function Profile (props: PropsType) {
    return(
        <div>
            <ProfileInfo />
            <MyPostsContainer dispatch={props.dispatch} posts={props.posts} newPostText={props.newPostText} />
        </div>
    );
}

export default Profile;