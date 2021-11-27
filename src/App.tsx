import React, {ComponentType} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom"
import {News} from "./components/Pages/News/News";
import {Music} from "./components/Pages/Music/Music";
import {Settings} from "./components/Pages/Settings/Settings";
import DialogsContainer from "./components/Pages/Dialogs/DialogsContainer";
import UsersContainer from "./components/Pages/Users/UsersContainer";
import ProfileContainer from "./components/Pages/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Pages/Login/Login";
import {connect} from "react-redux";
import {ActionsTypes} from "./redux/auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeAppTC} from "./redux/app-reducer";
import {Loader} from "./common-components/Loader/Loader";
import s from './App.module.css'


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitialized){
            return (
                <div className={s.loading}>
                    <Loader/>
                </div>
            )
        }

        return (
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={"content"}>
                        <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                        <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                        <Route path={"/login"} render={() => <Login/>}/>
                    </div>
                </div>
        );
    }
}


type MapStateToPropsType = {
    isInitialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}
type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isInitialized: state.app.initialized
})

const mapDispatchToProps = (dispatch: ThunkDispatch<AppStateType, void, ActionsTypes>): MapDispatchToPropsType => {
    return{
        initializeApp: () => dispatch(initializeAppTC()),
    }
}

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
) (App);
