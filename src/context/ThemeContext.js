import { createContext } from "react";

const ThemeContext = createContext()

const ThemeProvider = ThemeContext.Provider 

export {ThemeContext, ThemeProvider}