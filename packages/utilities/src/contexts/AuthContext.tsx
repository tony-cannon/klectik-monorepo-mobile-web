import { Session, User } from '@supabase/supabase-js';
import { supabaseClient } from '@utilities/lib/supabase';
import React, { createContext, useContext, useEffect, useState } from 'react';

// create a context for authentication
const AuthContext = createContext<{
    session: Session | null | undefined;
    user: User | null | undefined;
    signIn: () => void;
    signOut: () => void;
    signUp: () => void;
}>({
    session: null,
    user: null,
    signIn: () => {},
    signOut: () => {},
    signUp: () => {},
});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User>();
    const [session, setSession] = useState<Session | null>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const setData = async () => {
            const {
                data: { session },
                error,
            } = await supabaseClient.auth.getSession();
            if (error) throw error;
            setSession(session);
            setUser(session?.user);
            setLoading(false);
        };

        const { data: listener } = supabaseClient.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
                setUser(session?.user);
                setLoading(false);
            }
        );

        setData();

        return () => {
            listener?.subscription.unsubscribe();
        };
    }, []);

    const value = {
        session,
        user,
        signIn: (data) => supabaseClient.auth.signInWithPassword(data),
        signOut: () => supabaseClient.auth.signOut(),
        signUp: (data) => supabaseClient.auth.signUp(data),
    };

    // use a provider to pass down the value
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

// export the useAuth hook
export const useAuth = () => {
    return useContext(AuthContext);
};
