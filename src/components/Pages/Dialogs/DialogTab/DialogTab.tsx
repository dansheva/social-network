import React from "react";
import s from "./DialogTab.module.css"
import {PostAvatar} from "../../../../common-components/Post/PostAvatar/PostAvatar";
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string
    lastMessage: string
    time: string
    id: number
}

export function DialogTab (props: PropsType) {
    return (
        <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>
            <div className={`${s.dialog_tab}`}>
                <div className={s.content}>
                    <div className={s.left__container}>
                        <div className={s.photo__container}>
                            <PostAvatar/>
                        </div>
                        <div className={s.name_last_message__container}>
                            <div className={s.name}>
                                {props.name}
                            </div>
                            <div className={s.last_message}>
                                {props.lastMessage}
                            </div>
                        </div>
                    </div>
                    <div className={s.right__container}>
                        <div className={s.time}>
                            {props.time}
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}