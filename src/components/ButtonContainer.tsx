import { memo, FC, useContext, useCallback } from "react";
import {
    createTheme,
    Tooltip,
    ThemeProvider,
    Button,
    Stack,
    Divider,
} from "@mui/material";
import { ACTIONS, FilterContext } from "../contexts/FilterContext";
import { teamDetails } from "../assets/TeamDetails";
import { buttonColors } from "../assets/ButtonColors";

type ButtonProps = {
    name: string;
    abb: string;
};

const CustomButton: FC<ButtonProps> = memo(({ name, abb }) => {
    const { state, dispatch } = useContext(FilterContext);
    const onTeamChange = useCallback(
        (newTeam: string) => {
            dispatch({ type: ACTIONS.TEAM, payload: newTeam });
        },
        [dispatch]
    );

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
                        transition: "border-width 0.45s ease-in-out",
                    }}
                    aria-label={name}
                    variant={state.team === colorKey ? "contained" : "outlined"}
                    color="primary"
                    size="small"
                    onClick={() => onTeamChange(colorKey)}
                >
                    {abb}
                </Button>
            </Tooltip>
        </ThemeProvider>
    );
});

export const ButtonContainer = () => {
    return (
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
    );
};
