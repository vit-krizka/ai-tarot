import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { UserContext } from '../../context/UserProvider';
import { supabase } from '../../services/supabaseService';

import './myAccount.scss';

function MyAccount() {
    const { user } = useAuth();
    const { firstName, setFirstName, lastName, setLastName, profession, setProfession } = useContext(UserContext);
    const navigate = useNavigate();


    useEffect(() => {
        const loadData = async () => {
            try {
                const { data: userData, error } = await supabase.from('users').select().eq('id', user?.id).single();
                if (error) throw error;
                setFirstName(userData?.firstName);
                setLastName(userData?.lastName);
                setProfession(userData?.profession);
            } catch (error) {
                navigate('/finish-register');
            }
        };

        loadData();
    }, [user]);

    const handleAccount = async (e) => {
        e.preventDefault();

        try {
            const { error } = await supabase.from('users').update({
                firstName: firstName,
                lastName: lastName,
                profession: profession,
            }).eq('id', user?.id);

            if (error) throw error;
            alert('Údaje byly úspěšně aktualizovány.');
        } catch (error) {
            alert(`Při aktualizaci došlo k chybě: ${error.message}`);
        }

    };

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <h2>Uživatelský účet</h2>
                <form onSubmit={handleAccount}>
                    <label htmlFor="email">E-mailová adresa</label>
                    <input type="email" value={user?.email} disabled />

                    <label htmlFor="firstName">Jméno</label>
                    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                    <label htmlFor="lastName">Příjmení</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                    <label htmlFor="profession">Profese</label>
                    <input type="text" id="profession" value={profession} onChange={(e) => setProfession(e.target.value)} />

                    <button type="submit">Aktualizovat údaje</button>
                </form>
                <Link className='close' to="/">×</Link>
            </div>
        </div>
    );
}

export default MyAccount;
