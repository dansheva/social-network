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
import {ActionsTypes, stateType} from "./redux/store"


type PropsType = {
    state: stateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Route path={"/profile"} render={() => <Profile dispatch={props.dispatch}
                                                                    newPostText={props.state.profile.newPostText}
                                                                    posts={props.state.profile.posts}/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs dispatch={props.dispatch}
                                                                    dialogs={props.state.dialogs}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
