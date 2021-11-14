import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileDataType} from "../../../redux/profile-reducer";

type PropsType = {
    profileData: ProfileDataType | null
    status: string | null
    updateStatus: (status: string) => void
}

function Profile (props: PropsType) {

    return(
        <div>
            <ProfileInfo profileData={props.profileData}
                         status={props.status}
                         updateStatus={props.updateStatus} />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;