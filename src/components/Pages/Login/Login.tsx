import React from "react";
import s from './Login.module.css'
import LoginForm, {FormDataType} from "./LoginForm/LoginForm";

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div className={`${s.container} box_shadow`}>
            <div className={s.login_container}>
                <div>
                    <h2 className={s.title}>Sign in</h2>
                    <div className={s.divider}></div>
                </div>
                <LoginForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}