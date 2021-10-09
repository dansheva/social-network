import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {EmptyObject, Store} from "redux";
import {dialogsType} from "../../../redux/dialogs-reducer";
import { profileType } from '../../../redux/profile-reducer';

type PropsType = {
    store: Store<EmptyObject & {profile: profileType, dialogs: dialogsType}>
}


function Profile (props: PropsType) {
    return(
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;