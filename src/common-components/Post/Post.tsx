import React from "react";
import {PostAvatar} from "./PostAvatar/PostAvatar";
import s from "./Post.module.css"

type PropsType = {
    name: string
    message: string
    time: string
}

export function Post(props: PropsType) {
    return(
        <div className={s.post}>
            <div className={s.avatar_name}>
                <PostAvatar />
                <div className={s.name__time_ago}>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.time_ago}>
                        {props.time}
                    </div>
                </div>
            </div>
            <div className={s.content}>
                {props.message}
            </div>
        </div>
    )
}