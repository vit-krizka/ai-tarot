import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profession, setProfession] = useState("");

    return (
        <UserContext.Provider value={{ firstName, setFirstName, lastName, setLastName, profession, setProfession }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;