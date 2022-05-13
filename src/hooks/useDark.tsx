import { useEffect, useState } from "react";
import { PaletteMode } from "@mui/material";

const locStorSet = (theme: PaletteMode): void => {
    window.localStorage.setItem("theme", theme);
};

export const useDark = () => {
    const storedTheme = window.localStorage.getItem("theme") as PaletteMode;
    const [theme, setTheme] = useState<PaletteMode>(
        storedTheme ? storedTheme : "dark"
    );

    const toggleTheme = (): void => {
        if (theme === "light") {
            locStorSet("dark");
            setTheme("dark");
            document.body.style.backgroundColor = "#eae3ff";
        } else {
            locStorSet("light");
            setTheme("light");
            document.body.style.backgroundColor = "#000000";
        }
    };

    useEffect(() => {
        const localTheme: PaletteMode | undefined = window.localStorage.getItem(
            "theme"
        ) as PaletteMode;

        if (localTheme) {
            setTheme(localTheme);
            document.body.style.backgroundColor =
                localTheme === "light" ? "#000000" : "#eae3ff";
        } else {
            const prefersLight: boolean =
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: light)").matches;
            setTheme(prefersLight ? "light" : "dark");
            document.body.style.backgroundColor = prefersLight
                ? "#000000"
                : "#eae3ff";
        }
    }, []);

    return { theme, toggleTheme };
};
