import { Link } from 'react-router-dom';

import { auth, googleProvider } from './../../firebaseConfig';
import { useAuthState, useSignInWithGoogle, useSignOut } from "react-firebase-hooks/auth";

import './login.scss';

function Login() {
    const [user, loading, error] = useAuthState(auth);
    const [signOut, errorSignOut] = useSignOut(auth);

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth, googleProvider);

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            setUser(userGoogle);
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

    return (
        <div className='login-wrapper'>
            <div className='login'>
                {user ? (
                    <>
                        <div>Můj účet</div>
                        <div>{user.displayName}</div>
                        {user.photoURL && (
                            <img className="userAvatar" src={user.photoURL} alt="Profilová fotka" />
                        )}
                        <div>E-mail: {user.email}</div>
                        <button onClick={handleSignOut}>Odhlásit se</button>
                    </>
                ) : (
                    <>
                        <div>LOGIN</div>
                        <button onClick={handleGoogleLogin}>
                            Přihlásit přes Google
                        </button>
                    </>

                )}
                <Link to="/">Zpět do aplikace</Link>
            </div>
        </div>
    );
}

export default Login;
