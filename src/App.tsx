import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Pages/Profile/Profile";
import {Dialogs} from "./components/Pages/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import {News} from "./components/Pages/News/News";
import {Music} from "./components/Pages/Music/Music";
import {Settings} from "./components/Pages/Settings/Settings";
import {EmptyObject, Store} from "redux";
import {profileType} from "./redux/profile-reducer";
import {dialogsType} from "./redux/dialogs-reducer";
import {DialogsContainer} from "./components/Pages/Dialogs/DialogsContainer";


type PropsType = {
    store:  Store<EmptyObject & {profile: profileType, dialogs: dialogsType}>
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Route path={"/profile"} render={() => <Profile store={props.store}/>} />
                    <Route path={"/dialogs"} render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
