import { ThemeProvider } from "@emotion/react";
import {
    Button,
    createTheme,
    Divider,
    Grid,
    Stack,
    Tooltip,
} from "@mui/material";
import { FC } from "react";
import { buttonColors } from "../../assets/ButtonColors";
import "./MobileDash.css";
import { teamDetails } from "../../assets/TeamDetails";
import { TimeSlider } from "../../components/TimeSlider";

type ButtonProps = {
    name: string;
    abb: string;
};

const CustomButton: FC<ButtonProps> = ({ name, abb }) => {
    const colorKey: string =
        abb === "dc" ? name.split(" ")[0].toLowerCase() : abb;

    const ButtonTheme = createTheme({
        palette: {
            primary: {
                main: buttonColors[colorKey],
            },
            divider: "#eeeeee",
        },
        typography: {
            button: {
                fontWeight: 600,
            },
        },
    });

    return (
        <ThemeProvider theme={ButtonTheme}>
            <Tooltip title={name} arrow>
                <Button
                    sx={{
                        borderWidth: { xs: "2px", md: "3px" },
                    }}
                    aria-label={name}
                    variant="outlined"
                    color="primary"
                    size="small"
                >
                    {abb}
                </Button>
            </Tooltip>
        </ThemeProvider>
    );
};

export const MobileDash = () => {
    return (
        <Grid
            container
            // mx={{ xs: 1, sm: 1.5, md: 2 }}
            sx={{ minHeight: "100vh" }}
            spacing={3.5}
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={11} sm={7.25} md={8.5}>
                <Stack
                    direction={"row"}
                    divider={<Divider orientation="vertical" flexItem />}
                    sx={{ overflow: "auto" }}
                    spacing={1.4}
                >
                    {teamDetails.map((data) => {
                        return (
                            <CustomButton
                                key={data.name}
                                name={data.name}
                                abb={data.abb}
                            />
                        );
                    })}
                </Stack>
            </Grid>
            <Grid item xs={11} sm={4.25} md={3.25}>
                <TimeSlider />
            </Grid>
        </Grid>
    );
};
