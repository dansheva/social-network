import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom"
import {News} from "./components/Pages/News/News";
import {Music} from "./components/Pages/Music/Music";
import {Settings} from "./components/Pages/Settings/Settings";
import DialogsContainer from "./components/Pages/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Pages/Users/UsersContainer";
import ProfileContainer from "./components/Pages/Profile/ProfileContainer";



function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>} />
                    <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
