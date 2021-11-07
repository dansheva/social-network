import s from "./LittleLoader.module.css";
import React from "react";

type PropsType = {
    className?:  string
    backgroundColor?: string
}

export const LittleLoader = (props: PropsType) => {

    const bgc: string = props.backgroundColor? props.backgroundColor: '#ffffff'

    return(
        <div className={`${s.loader} ${props.className}`}>
            <div style={{background: bgc,}}></div>
            <div style={{background: bgc,}}></div>
            <div style={{background: bgc,}}></div>
        </div>
    )
}