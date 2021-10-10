import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Pages/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom"
import {News} from "./components/Pages/News/News";
import {Music} from "./components/Pages/Music/Music";
import {Settings} from "./components/Pages/Settings/Settings";
import DialogsContainer from "./components/Pages/Dialogs/DialogsContainer";



function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Route path={"/profile"} render={() => <Profile />} />
                    <Route path={"/dialogs"} render={() => <DialogsContainer />}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
