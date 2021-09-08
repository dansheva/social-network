import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../../redux/state";

type PropsType = {
    posts: postsType
    newPostText: string
    addPost: () => void
    updateNewPostText: (value: string) => void
}


function Profile (props: PropsType) {
    return(
        <div>
            <ProfileInfo />
            <MyPosts updateNewPostText={props.updateNewPostText} addPost={props.addPost} posts={props.posts} newPostText={props.newPostText} />
        </div>
    );
}

export default Profile;