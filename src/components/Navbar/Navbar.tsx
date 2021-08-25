import React from 'react';
import {Tab} from "./Tab/Tab";
import {ProfileIcon} from "./Tab/Icons/ProfileIcon";
import {MessagesIcon} from "./Tab/Icons/MessagesIcon";
import {NewsIcon} from "./Tab/Icons/NewsIcon";
import {MusicIcon} from "./Tab/Icons/MusicIcon";
import {SettingsIcon} from "./Tab/Icons/SettingsIcon";
import s from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={`${s.nav} box_shadow`}>
            <Tab title={"Profile"} icon={<ProfileIcon/>}/>
            <Tab title={"Messages"} icon={<MessagesIcon/>}/>
            <Tab title={"News"} icon={<NewsIcon/>}/>
            <Tab title={"Music"} icon={<MusicIcon/>}/>
            <Tab title={"Settings"} icon={<SettingsIcon/>}/>
        </nav>
    );
}

export default Navbar;