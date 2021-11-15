import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import s from "./LoginForm.module.css";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    let error = false
    const finalInputClassName = `${s.input} ${error ? s.errorInput : s.superInput}`

    return(
        <form  className={s.form}>
            <div>
                <label>
                    <div className={s.label}>E-mail</div>
                    <Field
                        component={'input'}
                        type={'text'}
                        placeholder={"E-mail"}
                        className={finalInputClassName}/>
                </label>
            </div>
            <div>
                <label>
                    <div className={s.label}>Password</div>
                    <Field
                        component={'input'}
                        type={'password'}
                        placeholder={"Password"}
                        className={finalInputClassName}/>
                </label>
            </div>
            <div>
                <label className={s.label}>
                    <Field
                        component={'input'}
                        type={'checkbox'}
                        onChange={() => {}}
                        className={s.checkbox}
                    />
                    <span className={s.spanClassName}>Keep me logged in</span>
                </label>
            </div>
            <div className={s.button_container}>
                <button type={'submit'} className={s.button}>Sign in</button>
            </div>
        </form>
    )
}

export default reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)