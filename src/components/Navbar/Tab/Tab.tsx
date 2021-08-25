import React, { FC } from "react";
import s from "../Navbar.module.css"

type PropsType = {
    title: string
    icon: JSX.Element
}

export function Tab (props: PropsType) {
    return (
        <div className={s.tab}>
            <a href="#">
                <div className={s.wrapper}>
                    <div className={s.icon_wrapper}>
                        {props.icon}
                    </div>
                    <div className={s.title_wrapper}>
                        <p>{props.title}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}