import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

function Header() {
    const [visible, setVisible] = useState(true);

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
                        <Link to="/login">Login</Link>
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