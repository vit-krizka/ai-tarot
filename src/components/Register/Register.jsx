import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import './register.scss';

function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password.length < 6) {
            alert("Heslo musí mít minimálně 6 znaků");
            return;
        }

        try {
            const { user, error } = await register({ email, password, firstNameInput, lastNameInput });

            if (error) {
                alert(`Chyba při registraci: ${error.message}`);
                return;
            }

            alert("Ověř nyní svůj e-mail.");
            navigate('/');
        } catch (error) {
            alert(`Chyba při registraci: ${error.message}`);
        }
    };

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <h1>Registrace</h1>
                <form onSubmit={handleRegister}>
                    <label htmlFor="email">E-mailová adresa</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e-mail" required />
                    <label htmlFor="password">Heslo</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="heslo" required minLength="6" />
                    <label htmlFor="firstName">Jméno</label>
                    <input type="text" value={firstNameInput} onChange={(e) => setFirstNameInput(e.target.value)} placeholder="jméno" />
                    <label htmlFor="lastName">Příjmení</label>
                    <input type="text" value={lastNameInput} onChange={(e) => setLastNameInput(e.target.value)} placeholder="příjmení" />
                    <button type="submit">Registrovat</button>
                </form>
                <Link className='close' to="/">×</Link>
            </div>
        </div>
    );
}

export default Register;







