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
import {ActionsTypes, stateType, StoreType} from "./redux/state"


type PropsType = {
    state: stateType
    store: StoreType
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
                    <Route path={"/dialogs"} render={() => <Dialogs dialogsTabsData={props.state.dialogs.dialogsData}
                                                                    messagesData={props.state.dialogs.messagesData}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
