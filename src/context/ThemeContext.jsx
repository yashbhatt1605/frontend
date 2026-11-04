import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    theme: "dark",
    darkMode: true,
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem("carxpress-theme") || "dark";
        } catch {
            return "dark";
        }
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.style.colorScheme = theme;
        try {
            localStorage.setItem("carxpress-theme", theme);
        } catch {
            // Theme still works for the current session if storage is unavailable.
        }
    }, [theme]);

    const toggleTheme = () => setTheme((current) => current === "dark" ? "light" : "dark");

    return (
        <ThemeContext.Provider value={{ theme, darkMode: theme === "dark", toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
