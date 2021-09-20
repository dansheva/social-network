import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, postsType} from "../../../redux/state";

type PropsType = {
    posts: postsType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


function Profile (props: PropsType) {
    return(
        <div>
            <ProfileInfo />
            <MyPosts dispatch={props.dispatch} posts={props.posts} newPostText={props.newPostText} />
        </div>
    );
}

export default Profile;