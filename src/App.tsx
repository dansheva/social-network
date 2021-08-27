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
import {Post} from "./common-components/Post/Post";
import {DialogsTabsDataType, MessagesDataType, postsType} from "./index"


type PropsType = {
    posts: postsType
    dialogsData: DialogsTabsDataType
    messagesData: MessagesDataType
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Route path={"/profile"} render={() => <Profile posts={props.posts}/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogsTabsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
