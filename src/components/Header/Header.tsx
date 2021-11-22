import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {Logo} from "./Logo/Logo";
import {PostAvatar} from "../../common-components/Post/PostAvatar/PostAvatar";

type PropsType = {
    isAuth: boolean
    userAvatar: string | null
    logOut: () => void
}

function Header(props: PropsType) {
    return (
        <header className={`${s.header} box_shadow`}>
            <div className={s.logo_container}>
                <Logo/>
            </div>
            <div className={s.login_container}>
                {
                    props.isAuth
                        ? <div className={s.post_avatar_container}>
                            <PostAvatar href={'/profile'}
                                        photoSrc={props.userAvatar ? props.userAvatar : undefined}/>
                            <div className={s.login} onClick={props.logOut}>
                                Log Out
                            </div>
                        </div>
                        : <NavLink to={'/login'}>
                            <div className={s.login}>
                                Log In
                            </div>
                        </NavLink>
                }

            </div>
        </header>
    );
}

export default Header;