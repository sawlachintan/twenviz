import { Slider, createTheme, ThemeProvider } from "@mui/material";
import { FC, memo, useCallback, useContext } from "react";
import { buttonColors } from "../assets/ButtonColors";
import { FilterContext, ACTIONS } from "../contexts/FilterContext";

export const TimeSlider: FC = memo(() => {
    const { state, dispatch } = useContext(FilterContext);

    const ButtonTheme = createTheme({
        palette: {
            primary: {
                main: buttonColors[state.team],
            },
            divider: "#eeeeee",
        },
        typography: {
            button: {
                fontWeight: 600,
            },
        },
    });

    const handleChange = useCallback(
        (event: Event, newValue: number | number[]) => {
            dispatch({ type: ACTIONS.YEARS, payload: newValue as number[] });
        },
        [dispatch]
    );

    const timeChosen = (value: number) => {
        return `${value}`;
    };

    return (
        <ThemeProvider theme={ButtonTheme}>
            <Slider
                value={state.years}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={timeChosen}
                getAriaLabel={() => "Time Filter"}
                defaultValue={[2008, 2021]}
                min={2008}
                max={2022}
                step={1}
                marks
            />
        </ThemeProvider>
    );
});
