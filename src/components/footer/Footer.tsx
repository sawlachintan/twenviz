import { Link, Stack, Typography } from "@mui/material";
import { FC, memo } from "react";
import { useLocation } from "react-router-dom";
import { ContactMe } from "./ContactMe";

export const Footer: FC = memo(() => {
    const location = useLocation();

    const matchError: boolean =
        location.pathname !== "/" && location.pathname !== "/about";
    return (
        <Stack
            alignItems={"center"}
            justifyContent="center"
            height={matchError ? "15vh" : undefined}
        >
            <Stack
                spacing={1.5}
                justifyContent={"center"}
                direction={"row"}
                width="100vw"
            >
                <ContactMe />
            </Stack>
            <Typography color="primary" variant="body2">
                Made by{" "}
                {
                    <Link
                        style={{
                            textDecoration: "none",
                            borderRadius: "2.5%",
                        }}
                        href="https://sawlachintan.github.io/personal-website"
                        target="_blank"
                    >
                        Chintan Sawla
                    </Link>
                }
            </Typography>
        </Stack>
    );
});
