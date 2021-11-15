import React from "react";
import s from './Login.module.css'
import LoginForm from "./LoginForm/LoginForm";

export const Login = () => {
    return (
        <div className={`${s.container} box_shadow`}>
            <div className={s.login_container}>
                <div>
                    <h2 className={s.title}>Sign in</h2>
                    <div className={s.divider}></div>
                </div>
                <LoginForm/>
            </div>
        </div>
    )
}