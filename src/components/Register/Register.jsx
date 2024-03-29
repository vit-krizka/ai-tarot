import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

import './register.scss';

function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [profession, setProfession] = useState('');
    const [hobbies, setHobbies] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password.length < 6) {
            alert("Heslo musí mít minimálně 6 znaků");
            return;
        }

        const userData = {
            email,
            password,
            firstName,
            lastName,
            age: parseInt(age, 10),
            profession,
            hobbies
        };

        try {
            const { user, error } = await register(userData);
            console.log("USER", user);
            console.log("ERROR", error);

            if (!error && user) {
                console.log("Registrace proběhla úspěšně");
                navigate('/future-divination/');
            } else if (error) {
                alert("Došlo k chybě při registraci. Zkuste to prosím znovu.");
                console.log("Chyba při registraci: " + error.message);
            }
        }
        catch (error) {
            console.log("Chyba při registraci: ", error);
        }
    };

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <h1>Registrace</h1>
                <form onSubmit={handleRegister}>
                    <h2>Přihlašovací údaje</h2>

                    <label htmlFor="email">E-mailová adresa</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e-mail" required />
                    <label htmlFor="password">Heslo</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="heslo" required minLength="6" />

                    <h2>Další údaje o uživateli</h2>
                    <label htmlFor="firstName">Jméno</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="jméno" />
                    <label htmlFor="lastName">Příjmení</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="příjmení" />
                    <label htmlFor="age">Věk</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="věk" />
                    <label htmlFor="profession">Profese</label>
                    <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} placeholder="profese" />
                    <label htmlFor="hobbies">Koníčky</label>
                    <input type="text" value={hobbies} onChange={(e) => setHobbies(e.target.value)} placeholder="koníčky" />
                    <button type="submit">Registrovat</button>
                </form>
                <Link className='close' to="/">×</Link>
            </div>
        </div>
    );
}

export default Register;
