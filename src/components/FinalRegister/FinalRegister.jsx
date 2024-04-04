import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { UserContext } from '../../context/UserProvider';
import { supabase } from '../../services/supabaseService';

import './finalRegister.scss';

function FinalRegister() {
    const { user } = useAuth();
    const { firstName, setFirstName, lastName, setLastName, profession, setProfession } = useContext(UserContext);

    useEffect(() => {
        setFirstName(user?.user_metadata?.firstName);
        setLastName(user?.user_metadata?.lastName);
    });

    const finishRegistration = async (e) => {
        e.preventDefault();

        try {
            const { error: insertError } = await supabase
                .from('users')
                .insert([{
                    id: user.id,
                    firstName: firstName,
                    lastName: lastName,
                    profession: profession,
                }]);

            if (insertError) {
                console.error("Chyba při zápisu do databáze:", insertError.message);
            } else {
                setFirstName(firstNameInput);
                setLastName(lastNameInput);
                setProfession(professionInput);
            }
        } catch (error) {
            console.error("Chyí ID uživatele:", error.message);
        }

    };

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <h2>Dokončení registrace</h2>
                <form onSubmit={finishRegistration}>
                    <label htmlFor="email">E-mailová adresa</label>
                    <input type="email" value={user?.email} disabled />

                    <label htmlFor="firstName">Jméno</label>
                    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                    <label htmlFor="lastName">Příjmení</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                    <label htmlFor="profession">Profese</label>
                    <input type="text" id="profession" value={profession} onChange={(e) => setProfession(e.target.value)} />

                    <button type="submit">Dokončit registraci</button>
                </form>
                <Link className='close' to="/">×</Link>
            </div>
        </div>
    );
}

export default FinalRegister;
