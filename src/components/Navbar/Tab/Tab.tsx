import React, { FC } from "react";
import s from "../Navbar.module.css"
import {NavLink} from "react-router-dom"

type PropsType = {
    title: string
    icon: JSX.Element
    href: string
}

export function Tab (props: PropsType) {
    return (
        <div className={s.tab}>
            <NavLink activeClassName={s.active} to={`${props.href}`}>
                <div className={s.wrapper}>
                    <div className={s.icon_wrapper}>
                        {props.icon}
                    </div>
                    <div className={s.title_wrapper}>
                        <p>{props.title}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}