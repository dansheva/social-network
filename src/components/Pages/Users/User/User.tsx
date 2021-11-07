import s from "./User.module.css";
import {PostAvatar} from "../../../../common-components/Post/PostAvatar/PostAvatar";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {LittleLoader} from "../../../../common-components/Loader/LittleLoader";
import {UsersApi} from "../../../../api/api";


type PropsType = {
    id: number
    name: string
    status?: string
    isFollowed: boolean
    followCallback: (userId: number) => void
    unFollowCallback: (userId: number) => void
    photo?: string
    href: string
    isFetchingButtons: string[]
    setIsFetchingButtons: (isFetching: boolean, userId: string) => void
}

export const User = (props: PropsType) => {

    const follow = () => {
        props.setIsFetchingButtons(true, props.id.toString())
        UsersApi.followUser(props.id.toString())
            .then(data => {
                props.setIsFetchingButtons(false, props.id.toString())
                if (data.resultCode === 0) {
                    props.followCallback(props.id)
                }
            })
    }

    const unFollow = () => {
        props.setIsFetchingButtons(true, props.id.toString())
        UsersApi.unfollowUser(props.id.toString())
            .then(data => {
                props.setIsFetchingButtons(false, props.id.toString())
                if (data.resultCode === 0){
                    props.unFollowCallback(props.id)
                }
            })
    }

    return (
        <div className={s.user}>
            <PostAvatar photoSrc={props.photo} href={props.href}/>
            <div>
                <div className={s.name_container}>
                    <NavLink to={props.href}>
                        <span className={s.name}>
                            {props.name}
                        </span>
                    </NavLink>
                </div>
                {
                    props.status && <div className={s.status_container}>
                        <span className={s.status}>Status: {props.status}</span>
                    </div>
                }

            </div>
            <div className={s.button_container}>
                {props.isFollowed
                    ? <div onClick={unFollow} className={`${s.button} ${s.unfollow}`}>
                        {props.isFetchingButtons.some(id => id === props.id.toString())
                            ? <LittleLoader className={s.loader} backgroundColor={'#888888'}/>
                            : 'Unfollow'}
                    </div>
                    : <div onClick={follow} className={`${s.button} ${s.follow}`}>
                        {props.isFetchingButtons.some(id => id === props.id.toString())
                            ? <LittleLoader className={s.loader}/>
                            : 'Follow'}
                    </div>}
            </div>
        </div>
    )
}