import React from "react";
import s from './Login.module.css'

export const Login = () => {

    let error = false

    const finalInputClassName = `${s.input} ${error ? s.errorInput : s.superInput}`

    return (
        <div className={`${s.container} box_shadow`}>
            <div className={s.login_container}>
                <div>
                    <h2 className={s.title}>Sign in</h2>
                    <div className={s.divider}></div>
                </div>
                <div>
                    <div className={s.label}>Your e-mail or phone number</div>
                    <input
                        type={'text'} className={finalInputClassName}/>
                </div>
            </div>
        </div>
    )
}