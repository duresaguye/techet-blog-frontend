import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Initialize theme state with the value from localStorage or default to 'dark'
    const storedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(storedTheme || 'dark');

    useEffect(() => {
        // Update the body class whenever the theme changes
        document.body.className = theme;
        localStorage.setItem('theme', theme); // Store the theme in localStorage
    }, [theme]);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme); // Update theme state
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
