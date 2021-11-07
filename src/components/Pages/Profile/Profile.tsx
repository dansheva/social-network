import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileDataType} from "../../../redux/profile-reducer";

type PropsType = {
    profileData: ProfileDataType | null
}

function Profile (props: PropsType) {

    return(
        <div>
            <ProfileInfo profileData={props.profileData} />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;