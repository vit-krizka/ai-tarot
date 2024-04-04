import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/AuthProvider';
import { SettingContext } from './../../context/SettingProvider';

import './header.scss';

function Header() {
    const { menuVisible, setMenuVisible } = useContext(SettingContext);
    const { auth, user, logout } = useAuth();

    const handleLogOut = async () => {
        logout();
    }

    if (menuVisible) {
        return (
            <header className='header-wrapper'>
                <div className='header'>
                    <h1 className="title">
                        <div onClick={() => setMenuVisible(false)}>Tarot</div>
                    </h1>
                    <div className="menu">
                        <Link to="/divinations">Věštby</Link>
                        <Link to="/cards">Karty</Link>
                        {/* <Link to="/blog">Články</Link> */}
                        <Link to="/about">O aplikaci</Link>
                    </div>
                    <div className="buttons">
                        {/* <p>{auth ? "Přihlášen" : "Nepřihlášen"}</p> */}
                        {/* <p>{user?.email}</p> */}
                        {auth ? <Link to="/my-account">{user?.email}</Link> : ""}
                        {auth ? "" : <Link to="/register">Registrace</Link>}
                        {auth ? "" : <Link to="/login">Login</Link>}
                        {auth ? <button onClick={handleLogOut}>Odhlásit se</button> : ""}
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <div className='header-wrapper hide'>
                <div className='header'>
                    <h1 className="title">
                        <div onClick={() => setMenuVisible(true)}>MENU</div>
                    </h1>
                </div>
            </div>);
    }

}

export default Header;