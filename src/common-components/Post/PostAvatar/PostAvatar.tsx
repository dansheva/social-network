import React from "react";
import s from "./PostAvatar.module.css"

export function PostAvatar() {
    return(
        <div className={s.avatar_container}>
            <img className={s.avatar} src="https://cdn.dribbble.com/users/1355613/screenshots/15252730/media/28f348daf9654c440f5dcf398d8e097a.jpg" alt="avatar"/>
        </div>
    )
}