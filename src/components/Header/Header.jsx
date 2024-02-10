import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './../../firebaseConfig';

import './header.scss';

function Header() {
    const [visible, setVisible] = useState(true);
    const [user, loading, error] = useAuthState(auth);

    if (visible) {
        return (
            <div className='header-wrapper'>
                <div className='header'>
                    <h1 className="title">
                        <Link to="/">Tarot</Link>
                    </h1>
                    <div className="menu">
                        <Link to="/divination">Věštby</Link>
                        <Link to="/divination">Karty</Link>
                        <Link to="/about">O aplikaci</Link>
                    </div>
                    <div className="buttons">
                        {user ? (
                            <>
                                {user.photoURL && (
                                    <Link to="/login"><img className="userAvatar" src={user.photoURL} alt="Profilová fotka" /></Link>
                                )}
                            </>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                        <button className="close" onClick={() => setVisible(false)}>X</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='header-wrapper hide'>
                <div className='header'>
                    <button className="close" onClick={() => setVisible(true)}>Menu</button>
                </div>
            </div>);
    }

}

export default Header;