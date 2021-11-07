import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileDataType} from "../../../../redux/profile-reducer";
import {Loader} from "../../../../common-components/Loader/Loader";

type PropsType = {
    profileData: ProfileDataType | null
}

export function ProfileInfo(props: PropsType) {


    if (props.profileData === null) {
        return (
            <Loader/>
        )
    }

    return (
        <div className={s.profile_info}>
            <div className={s.avatar_description_container}>
                <div className={s.avatar_container}>
                    <img
                        className={s.avatar}
                        src={`${
                            props.profileData.photos.small !== null
                                ? props.profileData.photos.small
                                : 'https://cdn.dribbble.com/users/1355613/screenshots/15252730/media/28f348daf9654c440f5dcf398d8e097a.jpg'}`}
                        alt="avatar"/>
                </div>
                <div className={s.description}>
                    {props.profileData.fullName && <div className={s.name}>
                        {props.profileData.fullName}
                    </div>}
                    {props.profileData.aboutMe && <div className={s.about}>
                        About me: {props.profileData.aboutMe}
                    </div>}
                </div>
            </div>
        </div>
    )
}