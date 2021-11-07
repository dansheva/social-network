import s from "./User.module.css";
import {PostAvatar} from "../../../../common-components/Post/PostAvatar/PostAvatar";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {LittleLoader} from "../../../../common-components/Loader/LittleLoader";
import axios from "axios";


type PropsType = {
    id: number
    name: string
    status?: string
    isFollowed: boolean
    followCallback: (userId: number) => void
    unFollowCallback: (userId: number) => void
    photo?: string
    href: string
    isFetchingButton: boolean
    setIsFetchingButton: (isFetching: boolean) => void
}

type FollowResponseType = {
    resultCode: number
    messages: string[]
    data: any//////
}

type UnFollowResponseType = {
    resultCode: number
    messages: string[]
    data: any//////
}

export const User = (props: PropsType) => {

    const [isFetchingButton, setIsFetchingButton] = useState(false)

    const follow = () => {
        setIsFetchingButton(true)
        axios.post<FollowResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {},
            {
                withCredentials: true,
                headers: {
                    'API-KEY' : '3ff5e044-7ebc-4a4d-9e54-aeedd5e75e0c'
                }
            })
            .then(res => {
                setIsFetchingButton(false)
                if (res.data.resultCode === 0) {
                    props.followCallback(props.id)
                }
            })
    }

    const unFollow = () => {
        setIsFetchingButton(true)
        axios.delete<UnFollowResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
            {
                withCredentials: true,
                headers: {
                    'API-KEY' : '3ff5e044-7ebc-4a4d-9e54-aeedd5e75e0c'
                }
            })
            .then(res => {
                setIsFetchingButton(false)
                if (res.data.resultCode === 0){
                    props.unFollowCallback(props.id)
                }
            })
            .catch(res => {
                setIsFetchingButton(false)
                debugger
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
                        {isFetchingButton
                            ? <LittleLoader className={s.loader} backgroundColor={'#888888'}/>
                            : 'Unfollow'}
                    </div>
                    : <div onClick={follow} className={`${s.button} ${s.follow}`}>
                        {isFetchingButton
                            ? <LittleLoader className={s.loader}/>
                            : 'Follow'}
                    </div>}
            </div>
        </div>
    )
}