import React from 'react';
import {Tab} from "./Tab/Tab";
import {ProfileIcon} from "./Tab/Icons/ProfileIcon";
import {MessagesIcon} from "./Tab/Icons/MessagesIcon";
import {NewsIcon} from "./Tab/Icons/NewsIcon";
import {MusicIcon} from "./Tab/Icons/MusicIcon";
import {SettingsIcon} from "./Tab/Icons/SettingsIcon";
import s from "./Navbar.module.css"
import {UsersIcon} from "./Tab/Icons/UsersIcon";

function Navbar() {
    return (
        <nav className={`${s.nav} box_shadow`}>
            <Tab title={"Profile"} icon={<ProfileIcon/>} href={"/profile"}/>
            <Tab title={"Messages"} icon={<MessagesIcon/>} href={"/dialogs"}/>
            <Tab title={"Users"} icon={<UsersIcon/>} href={"/users"}/>
            <Tab title={"News"} icon={<NewsIcon/>} href={"/news"}/>
            <Tab title={"Music"} icon={<MusicIcon/>} href={"/music"}/>
            <Tab title={"Settings"} icon={<SettingsIcon/>} href={"/settings"}/>
        </nav>
    );
}

export default Navbar;