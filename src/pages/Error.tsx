import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

const Error: FC = () => {
    return (
        <Stack
            width={"100vw"}
            height={"77.5vh"}
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Stack>
                <Typography
                    color="primary"
                    variant="h2"
                    fontSize={{ xs: "1.75rem", md: "2.75rem", lg: "3.75rem" }}
                >
                    OOPS!
                </Typography>
                <Typography
                    variant="body1"
                    color="primary"
                    fontSize={{
                        xs: "1.125rem",
                        md: "1.525rem",
                        lg: "2.125rem",
                    }}
                    fontWeight={500}
                >
                    This page doesn't exist
                </Typography>
                <Button
                    disableElevation
                    startIcon={<HomeIcon />}
                    href="/"
                    variant="contained"
                >
                    Go to Home page
                </Button>
            </Stack>
            <HeartBrokenIcon
                color="error"
                sx={{ fontSize: { xs: 85, md: 120, lg: 160 } }}
            />
        </Stack>
    );
};

export default Error;
