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
                <h2>Přihlášení</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Heslo:</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Přihlásit se</button>
                </form>
                <Link to="/">Zpět do aplikace</Link>
            </div>
        </div>
    );
}

export default Login;
