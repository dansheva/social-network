import s from "./User.module.css";
import {PostAvatar} from "../../../../common-components/Post/PostAvatar/PostAvatar";
import React from "react";
import {NavLink} from "react-router-dom";


type PropsType = {
    id: number
    name: string
    status?: string
    isFollowed: boolean
    followCallback: (userId: number) => void
    unFollowCallback: (userId: number) => void
    photo?: string
    href: string
}

export const User = (props: PropsType) => {

    const follow = () => {
        props.followCallback(props.id)
    }

    const unFollow = () => {
        props.unFollowCallback(props.id)
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
                    ? <button onClick={unFollow} className={`${s.button} ${s.unfollow}`}>Unfollow</button>
                    : <button onClick={follow} className={`${s.button} ${s.follow}`}>Follow</button>}
            </div>
        </div>
    )
}