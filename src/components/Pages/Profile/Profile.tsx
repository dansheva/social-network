import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../../redux/state";

type PropsType = {
    posts: postsType
}


function Profile (props: PropsType) {
    return(
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;