import {
    Stack,
    Box,
    IconButton,
    Typography,
    useTheme,
    Drawer,
    List,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    ListItem,
} from "@mui/material";
import { FC, memo, ReactElement, useCallback, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useCustomTheme } from "../../contexts/ThemeContext";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SportsCricketRoundedIcon from "@mui/icons-material/SportsCricketRounded";

type navLinks = {
    name: string;
    icon: ReactElement;
};

const navLink: navLinks[] = [
    {
        name: "Home",
        icon: <HomeRoundedIcon color="primary" fontSize="large" />,
    },
    {
        name: "About",
        icon: <InfoRoundedIcon color="primary" fontSize="large" />,
    },
    {
        name: "Dashboard",
        icon: <DashboardRoundedIcon color="primary" fontSize="large" />,
    },
];

export const MobileNavbar: FC = memo(() => {
    const mainTheme = useCustomTheme();

    const theme = useTheme();

    const [menu, setMenu] = useState<boolean>(false);

    const handleChange = useCallback<() => void>(() => {
        setMenu((prev) => !prev);
        console.log(menu);
    }, [menu]);

    return (
        <>
            <Stack
                width="100vw"
                height="7.5vh"
                alignItems={"center"}
                justifyContent="space-between"
                sx={{
                    display: { sm: "none" },
                }}
                direction="row"
            >
                <IconButton
                    aria-label="menu"
                    color="primary"
                    onClick={handleChange}
                >
                    <MenuRoundedIcon />
                </IconButton>

                <Stack
                    direction={"row"}
                    justifyContent="center"
                    alignItems={"center"}
                    spacing={0.5}
                >
                    <SportsCricketRoundedIcon
                        color="primary"
                        fontSize="large"
                    />
                    <Typography color="primary" variant="h1">
                        TwenVIZ
                    </Typography>
                </Stack>

                <IconButton
                    aria-label="switch themes"
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
            <Drawer
                anchor="left"
                variant="temporary"
                open={menu}
                onClose={() => {
                    setMenu(false);
                }}
            >
                <Box
                    sx={{
                        width: "45vw",
                        height: "100vh",
                        backgroundColor: "#222222",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    role="presentation"
                    pt={2}
                >
                    <List>
                        {navLink.map((data) => {
                            return (
                                <ListItem key={data.name}>
                                    <ListItemButton
                                        href={
                                            data.name === "Home"
                                                ? `/`
                                                : `/${data.name.toLowerCase()}`
                                        }
                                        component="a"
                                    >
                                        <ListItemIcon>{data.icon}</ListItemIcon>
                                        <ListItemText
                                            primary={data.name}
                                            sx={{
                                                color: theme.palette.primary
                                                    .main,
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
            {/* {
                <Slide
                    direction="right"
                    in={menu}
                    unmountOnExit
                    easing={{
                        enter: theme.transitions.easing.easeInOut,
                        exit: theme.transitions.easing.easeInOut,
                    }}
                    timeout={theme.transitions.duration.enteringScreen}
                >
                    <Stack
                        width={"60vw"}
                        height={"92.5vh"}
                        sx={{
                            backgroundColor: "inherit",
                            boxShadow: "50px 0px 50px 0px rgba(0,0,0,0.5)",
                            borderRadius: "0% 1% 1% 0%",
                            zIndex: 2,
                            postion: "relative",
                        }}
                        justifyContent={"space-evenly"}
                        alignItems="flex-start"
                        spacing={4}
                        px={4}
                    >
                        {navLink.map((data) => {
                            return (
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    key={data.name}
                                >
                                    <IconButton
                                        aria-label={data.name}
                                        href={
                                            data.name === "Home"
                                                ? "/"
                                                : `/${data.name.toLowerCase()}`
                                        }
                                        color="primary"
                                    >
                                        {data.icon}
                                    </IconButton>
                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            fontFamily: "Montserrat",
                                            fontWeight: 600,
                                            fontSize: "2rem",
                                        }}
                                        href={
                                            data.name === "Home"
                                                ? "/"
                                                : `/${data.name.toLowerCase()}`
                                        }
                                    >
                                        {data.name}
                                    </Link>
                                </Stack>
                            );
                        })}
                    </Stack>
                </Slide>
            } */}
        </>
    );
});
