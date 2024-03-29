import { createContext, useState } from "react";

export const SettingContext = createContext({});

const SettingProvider = ({ children }) => {
    const [menuVisible, setMenuVisible] = useState(true);

    return (
        <SettingContext.Provider value={{ menuVisible, setMenuVisible }}>
            {children}
        </SettingContext.Provider>
    );
};

export default SettingProvider;