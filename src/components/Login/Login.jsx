import { useState } from 'react';
import { Link } from 'react-router-dom';

import { auth, googleProvider } from './../../firebaseConfig';
import { useAuthState, useSignInWithGoogle, useSignOut } from "react-firebase-hooks/auth";

import './login.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    // Přidáno pro kontrolu stavu přihlášení
    const [user, loading, error] = useAuthState(auth);
    const [signOut, errorSignOut] = useSignOut(auth);

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth, googleProvider);

    const handleGoogleRegister = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error("Přihlášení přes Google selhalo:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error("Odhlášení selhalo:", error);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Zde by se měl přidat kód pro přihlášení pomocí Firebase
        console.log('Přihlašovací údaje:', email, password);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Zde by se měl přidat kód pro registraci pomocí Firebase
        console.log('Registrační údaje:', email, password);
    };

    return (
        <div className='login-wrapper'>
            <div className='login'>
                {user ? (
                    // Uživatel je přihlášen
                    <>
                        <div>Přihlášen jako: {user.email}</div>
                        <button onClick={handleSignOut}>Odhlásit se</button>
                    </>
                ) : (
                    // Uživatel není přihlášen
                    <>
                        {isRegistering ? (
                            // Registrace
                            <>
                                <div>REGISTRACE</div>
                                <form onSubmit={handleRegister}>
                                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <input type="password" placeholder="Heslo" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <button type="submit">Registrovat</button>
                                </form>
                                <button onClick={handleGoogleRegister}>
                                    Registrovat přes Google
                                </button>
                                <div>Už máte účet? <span className="link" onClick={() => setIsRegistering(false)}>Přihlašte se</span>.</div>
                            </>
                        ) : (
                            // Přihlášení
                            <>
                                <div>LOGIN</div>
                                <form onSubmit={handleLogin}>
                                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <input type="password" placeholder="Heslo" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <button type="submit">Přihlásit se</button>
                                </form>
                                <button onClick={handleGoogleRegister}>
                                    Přihlásit přes Google
                                </button>
                                <div>Nemáte účet? <span className="link" onClick={() => setIsRegistering(true)}>Zaregistrujte se</span>.</div>
                            </>
                        )}
                    </>
                )}
                <Link to="/">Zpět</Link>
            </div>
        </div>
    );
}

export default Login;
