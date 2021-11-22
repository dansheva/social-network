import React from "react";
import s from './Login.module.css'
import LoginForm, {FormDataType} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../../redux/redux-store";
import {ActionsTypes, loginThunkCreator} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props: LoginPropsType) => {

    const onSubmit = ({login, password, rememberMe}: FormDataType) => {
        props.login(login, password, rememberMe)
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

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

type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})
const mapDispatchToProps = (dispatch: ThunkDispatch<AppStateType, any, ActionsTypes>): MapDispatchToPropsType => {
    return {
        login: (email, password, rememberMe) => dispatch(loginThunkCreator(email, password, rememberMe))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)