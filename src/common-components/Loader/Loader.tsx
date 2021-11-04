import React from "react";
import s from './Loader.module.css'

type PropsType = {
    className?:  string | undefined
}

export const Loader = (props: PropsType) => {
    return(
        <div className={`${s.loader} ${props.className}`}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}