import { ThemeProvider, useTheme, useMediaQuery, Grid } from "@mui/material";
import { FC, useMemo, lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { getDesignTokens } from "./themes/Themes";
import { Navbar } from "./components/navbar/Navbar";
import { MobileNavbar } from "./components/navbar/MobileNavbar";
import { createTheme } from "@mui/material";
import { useCustomTheme } from "./contexts/ThemeContext";
import { Loading } from "./pages/Loading";
import { FilterProvider } from "./contexts/FilterContext";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About/About"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Error = lazy(() => import("./pages/Error"));

const App: FC = () => {
    const mainTheme = useCustomTheme();

    const onKeyDown = (event: any) => {
        console.log(event.key, event.code);
    };

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, []);

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
                    minHeight: "100vh",
                }}
            >
                <Suspense fallback={<Loading />}>
                    <FilterProvider>
                        <Grid
                            container
                            direction="column"
                            width="100vw"
                            sx={{ maxWidth: "100vw" }}
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid xs={12} item>
                                {!isMobile && <Navbar />}
                            </Grid>
                            <Grid xs={12} item>
                                {isMobile && <MobileNavbar />}
                            </Grid>
                            <Grid item xs={12}>
                                <Routes>
                                    <Route
                                        caseSensitive
                                        path="/"
                                        element={<Home />}
                                    />
                                    <Route
                                        caseSensitive
                                        path="/about"
                                        element={<About />}
                                    />
                                    <Route
                                        caseSensitive
                                        path="/dashboard"
                                        element={<Dashboard />}
                                    />
                                    <Route
                                        caseSensitive
                                        path="/404"
                                        element={<Error />}
                                    />
                                    <Route
                                        caseSensitive
                                        path="*"
                                        element={<Navigate replace to="/404" />}
                                    />
                                </Routes>
                            </Grid>
                            <Grid item xs={12}>
                                <Footer />
                            </Grid>
                        </Grid>
                    </FilterProvider>
                </Suspense>
            </div>
        </ThemeProvider>
    );
};

export default App;
