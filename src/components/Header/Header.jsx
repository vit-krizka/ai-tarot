import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/AuthProvider';

import './header.scss';

function Header() {
    const [visible, setVisible] = useState(true);

    const { auth, user, logout } = useAuth();

    const handleLogOut = async () => {
        logout();
    }

    if (visible) {
        return (
            <header className='header-wrapper'>
                <div className='header'>
                    <h1 className="title">
                        <div onClick={() => setVisible(false)}>Tarot</div>
                    </h1>
                    <div className="menu">
                        <Link to="/divinations">Věštby</Link>
                        <Link to="/cards">Karty</Link>
                        <Link to="/blog">Články</Link>
                        <Link to="/about">O aplikaci</Link>
                    </div>
                    <div className="buttons">
                        <p>{auth ? "přihlášen" : "nepřihlášen"}</p>
                        <p>{user?.email}</p>
                        <Link to="/register">Registrace</Link>
                        <Link to="/login">Login</Link>
                        {auth ? <button onClick={handleLogOut}>Odhlásit se</button> : ""}
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <div className='header-wrapper hide'>
                <h1 className="title">
                    <div onClick={() => setVisible(true)}>Tarot</div>
                </h1>
            </div>);
    }

}

export default Header;