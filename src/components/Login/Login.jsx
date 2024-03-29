import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

import './login.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await login(email, password);
            if (error) {
                console.log(error);
            }
            if (data.user && data.session) {
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <h1>Přihlášení</h1>
                <form onSubmit={handleLogin}>

                    <label htmlFor="email">E-mail:</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password">Heslo:</label>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                    />

                    <button type="submit">Přihlásit se</button>
                </form>
                <div className="register">
                    <p>Memáte účet? <Link to="/register">Zaregistrujte se.</Link></p>
                </div>
                <Link className='close' to="/">×</Link>
            </div>
        </div>
    );
}

export default Login;
