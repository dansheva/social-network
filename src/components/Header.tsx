import React from 'react';
import classes from './Header.module.css';

function Header () {
    return(
        <header className={classes.header + " box-shadow"}>
            <img className={classes.header__image} src="https://logos-download.com/wp-content/uploads/2017/07/Apple_Logo_1998.png" alt="logo"/>
        </header>
    );
}

export default Header;