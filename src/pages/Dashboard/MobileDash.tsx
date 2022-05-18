import { Grid, CircularProgress } from "@mui/material";
import { TimeSlider } from "../../components/TimeSlider";
import { ButtonContainer } from "../../components/ButtonContainer";
import { useData } from "../../hooks/useData";

import { FilterContext } from "../../contexts/FilterContext";
import { memo, useContext, useMemo } from "react";
import { CardContainer } from "../../components/CardContainer";

export const MobileDash = memo(() => {
    const data = useData();
    const { state } = useContext(FilterContext);

    const filterData = useMemo(() => {
        if (data) {
            console.log("new render");
            return data.filter((d: any) => {
                if (
                    d.abb === state.team &&
                    d.year >= Math.min(...state.years) &&
                    d.year <= Math.max(...state.years)
                ) {
                    return d;
                }
                return false;
            });
        }
        return null;
    }, [state, data]);

    return (
        <Grid
            container
            sx={{ minHeight: "100vh" }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
            width="100vw"
        >
            <Grid item xs={11.5} sm={7.25} md={8.5}>
                <ButtonContainer />
            </Grid>

            <Grid item xs={11.5} sm={4.25} md={3.25}>
                <TimeSlider />
            </Grid>
            <Grid item xs={12}>
                {filterData && <CardContainer data={filterData} />}
                {!filterData && <CircularProgress color="primary" />}
            </Grid>
            <Grid item xs={12}>
                {filterData && <CardContainer data={filterData} />}
            </Grid>
        </Grid>
    );
});
