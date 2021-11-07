import React from "react";
import s from "./PostAvatar.module.css"
import {NavLink} from "react-router-dom";

type PropsType = {
    photoSrc?: string
    href?: string
}

export function PostAvatar(props: PropsType) {
    const photoPlaceholder = "https://cdn.dribbble.com/users/1355613/screenshots/15252730/media/28f348daf9654c440f5dcf398d8e097a.jpg"
    const src = props.photoSrc ? props.photoSrc : photoPlaceholder

    const imageContainer = () => {
        return(
            <div className={s.avatar_container}>
                <img className={s.avatar} src={`${src}`} alt="avatar"/>
            </div>
        )
    }

    return (
        props.href ?
            <NavLink to={props.href}>
                {imageContainer()}
            </NavLink>
            : imageContainer()
    )
}