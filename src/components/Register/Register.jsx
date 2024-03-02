import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

import './register.scss';

function Register() {
    const { register } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [age, setAge] = useState('');
    // const [profession, setProfession] = useState('');
    // const [hobbies, setHobbies] = useState('');

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
            // age: parseInt(age, 10), 
            // profession,
            // hobbies
        };

        try {
            const { user, error } = await register(userData);

            if (!error && user) {
                alert("Registration Successful. Check your email to confirm your account");
            } else if (error) {
                alert("Error in Creating Account: " + error.message);
            }
        }
        catch (error) {
            console.log("Error in Creating Account", error);
        }

    };

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <h2>Registrace</h2>
                <form onSubmit={handleRegister}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Heslo" required minLength="6" />
                    {/* Nová inputová pole */}
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Jméno" required />
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Příjmení" required />
                    {/* <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Věk" required />
                    <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} placeholder="Profese" required />
                    <input type="text" value={hobbies} onChange={(e) => setHobbies(e.target.value)} placeholder="Koníčky" required /> */}
                    <button type="submit">Registrovat</button>
                </form>
                <Link to="/">Zpět do aplikace</Link>
            </div>
        </div>
    );
}

export default Register;
