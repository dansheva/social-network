import React from 'react';
import s from './Header.module.css';

function Header () {
    return(
        <header className={`${s.header} box_shadow`}>
            <img className={s.header__image} src="https://logos-download.com/wp-content/uploads/2017/07/Apple_Logo_1998.png" alt="logo"/>
        </header>
    );
}

export default Header;