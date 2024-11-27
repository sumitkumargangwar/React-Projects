import { useContext, createContext } from "react";

// Create the ThemeChanger context with default values
export const ThemeChanger = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

// Export the context provider correctly
export const ThemeProvider = ThemeChanger.Provider;

// Create a custom hook to use the ThemeChanger context
export default function useTheme() {
    return useContext(ThemeChanger);
}
