import { ThemeProvider, useTheme, useMediaQuery } from "@mui/material";
import { FC, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { About } from "./pages/About/About";
import { Error } from "./pages/Error";
import { getDesignTokens } from "./themes/Themes";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { MobileNavbar } from "./components/navbar/MobileNavbar";
import { createTheme } from "@mui/material";
import { useCustomTheme } from "./contexts/ThemeContext";
import { Dashboard } from "./pages/Dashboard/Dashboard";

const App: FC = () => {
    const mainTheme = useCustomTheme();

    const theme = useTheme();

    const isMobile = !useMediaQuery(theme.breakpoints.up("sm"));

    const colorMode = useMemo(
        () => createTheme(getDesignTokens(mainTheme?.theme)),
        [mainTheme?.theme]
    );

    return (
        <ThemeProvider theme={colorMode}>
            <div
                className={`App`}
                style={{
                    backgroundColor: `${
                        mainTheme?.theme === "light" ? "#161616" : "#eae3ff"
                    }`,
                    transition: "background-color 0.65s ease-in-out",
                }}
            >
                <header className="App-header">
                    {!isMobile && <Navbar />}
                    {isMobile && <MobileNavbar />}
                    <div style={{ position: "static" }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                        <Footer />
                    </div>
                </header>
            </div>
        </ThemeProvider>
    );
};

export default App;
