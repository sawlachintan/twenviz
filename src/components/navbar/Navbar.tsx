import { Grid, IconButton, Stack, Typography, Link } from "@mui/material";
import { FC, memo, ReactElement } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useCustomTheme } from "../../contexts/ThemeContext";

const navLink: string[] = ["Home", "About", "Dashboard"];

export const Navbar: FC = memo(() => {
    const mainTheme = useCustomTheme();

    return (
        <Grid
            container
            direction={"row"}
            width="100vw"
            height="7.5vh"
            alignItems={"center"}
            sx={{
                display: { xs: "none", sm: "flex" },
            }}
            px={2}
        >
            <Grid item sm={6} md={8}>
                <Typography color="primary" variant="h1">
                    TwenVIZ
                </Typography>
            </Grid>
            <Grid item sm={6} md={4}>
                <Stack
                    direction="row"
                    spacing={{ sm: 3 }}
                    justifyContent={"flex-end"}
                    alignItems="center"
                >
                    {navLink.map((name): ReactElement => {
                        return (
                            <Link
                                style={{
                                    textDecoration: "none",
                                    fontFamily: "Montserrat",
                                    fontWeight: 500,
                                }}
                                key={name}
                                href={
                                    name === "Home"
                                        ? "/"
                                        : `/${name.toLowerCase()}`
                                }
                            >
                                {name}
                            </Link>
                        );
                    })}
                    <IconButton
                        aria-label="switch dark and light"
                        color="primary"
                        onClick={mainTheme?.toggleTheme}
                    >
                        {mainTheme?.theme === "dark" ? (
                            <DarkModeIcon />
                        ) : (
                            <LightModeIcon />
                        )}
                    </IconButton>
                </Stack>
            </Grid>
        </Grid>
    );
});
