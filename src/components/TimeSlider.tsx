import { Slider } from "@mui/material";
import { useState } from "react";

type Props = {};

export const TimeSlider = (props: Props) => {
    const [time, setTime] = useState<number[]>([2008, 2021]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setTime(newValue as number[]);
    };

    const timeChosen = (value: number) => {
        return `${value}`;
    };

    return (
        <Slider
            value={time}
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
    );
};
