import React, { createContext, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode((previousMode) => !previousMode);
    };
    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};