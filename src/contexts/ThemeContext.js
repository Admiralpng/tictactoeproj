import { createContext, useState } from "react";

export const ThemeContext = createContext({})

export function ThemeContextProvider({children}) {
    
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark");
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}