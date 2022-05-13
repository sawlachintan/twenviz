import { PaletteMode } from "@mui/material";
import { createContext, FC, useContext } from "react";
import { useDark } from "../hooks/useDark";

type themeType = {
    theme: PaletteMode;
    toggleTheme: () => void;
};

type Props = {
    children?: JSX.Element | JSX.Element[];
};

export const ThemeContext = createContext<themeType | null>(null);

export const useCustomTheme = () => useContext(ThemeContext);

export const DarkThemeProvider: FC<Props> = ({ children }) => {
    const { theme, toggleTheme } = useDark();
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
