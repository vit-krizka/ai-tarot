import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from './../services/supabaseService';

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const register = async (userInfo) => {
    const { email, password, firstNameInput, lastNameInput } = userInfo;
    const { user, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                firstName: firstNameInput,
                lastName: lastNameInput
            }
        }
    });

    if (signUpError) {
        return { error: signUpError };
    }

    return { user, error: null };
}

const login = async (email, password) => {
    return supabase.auth.signInWithPassword({ email, password });
}

const logout = async () => {
    return supabase.auth.signOut();
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') {
                setUser(session.user);
                setAuth(true);
            }
            if (event === 'SIGNED_OUT') {
                setUser(null);
                setAuth(false);
            }
        });
        return () => {
            data.subscription.unsubscribe();
        };
    }, [])

    return (
        <AuthContext.Provider value={{ auth, user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;