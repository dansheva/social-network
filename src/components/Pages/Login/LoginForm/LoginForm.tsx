import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import s from "./LoginForm.module.css";
import Input from "../../../../common-components/Input/Input";
import {notEmpty} from "../../../../utils/validators/validators";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return(
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <label>
                    <div className={s.label}>E-mail</div>
                    <Field
                        name={'login'}
                        component={Input}
                        type={'text'}
                        placeholder={"E-mail"}
                        className={s.input}
                        validate={[notEmpty]}/>
                </label>
            </div>
            <div>
                <label>
                    <div className={s.label}>Password</div>
                    <Field
                        name={'password'}
                        component={Input}
                        type={'password'}
                        placeholder={"Password"}
                        className={s.input}
                        validate={[notEmpty]}/>
                </label>
            </div>
            <div>
                <label className={s.label}>
                    <Field
                        name={'rememberMe'}
                        component={'input'}
                        type={'checkbox'}
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