import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

import './myAccount.scss';

function MyAccount() {
    const { user, setUser } = useAuth();

    const [firstName, setFirstName] = useState(user?.user_metadata?.firstName || '');
    const [lastName, setLastName] = useState(user?.user_metadata?.lastName || '');
    const [age, setAge] = useState(user?.user_metadata?.age || '');
    const [profession, setProfession] = useState(user?.user_metadata?.profession || '');
    const [hobbies, setHobbies] = useState(user?.user_metadata?.hobbies || '');

    const handleAccount = async (e) => {
        e.preventDefault();

        const userData = {
            firstName,
            lastName,
            age: parseInt(age, 10),
            profession,
            hobbies
        };

        // TODO: Dokončit, aby bylo možné aktualizovat údaje uživatele
    };

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <h2>Uživatelský účet</h2>
                <form onSubmit={handleAccount}>
                    <label htmlFor="email">E-mailová adresa</label>
                    <input type="email" value={user?.email} disabled />

                    <label htmlFor="firstName">Jméno</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled />

                    <label htmlFor="lastName">Příjmení</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} disabled />

                    <label htmlFor="age">Věk</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} disabled />

                    <label htmlFor="profession">Profese</label>
                    <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} disabled />

                    <label htmlFor="hobbies">Koníčky</label>
                    <input type="text" value={hobbies} onChange={(e) => setHobbies(e.target.value)} disabled />

                    {/* <button type="submit">Aktualizovat údaje</button> */}
                </form>
                <Link className='close' to="/">×</Link>
            </div>
        </div>
    );
}

export default MyAccount;