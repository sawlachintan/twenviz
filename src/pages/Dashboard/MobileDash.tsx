import { Grid, CircularProgress } from "@mui/material";
import { TimeSlider } from "../../components/TimeSlider";
import { ButtonContainer } from "../../components/ButtonContainer";
import { useData } from "../../hooks/useData";

import { FilterContext } from "../../contexts/FilterContext";
import { memo, useContext, useMemo } from "react";
import { CardContainer } from "../../components/CardContainer";
import { MapVisualizer } from "../../components/MapVisualizer";
import { VizLayer } from "../../components/VizLayer";
import { PieVisualizer } from "../../components/PieVisualizer";

export const MobileDash = memo(() => {
    const data = useData();
    const { state } = useContext(FilterContext);

    const filterData = useMemo(() => {
        if (data) {

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
        <>
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                width="100vw"
            >
                <Grid
                    item
                    xs={12}
                    container
                    spacing={2.5}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={11.55} sm={8.4}>
                        <ButtonContainer />
                    </Grid>
                    <Grid item xs={11.25} sm={3.4}>
                        <TimeSlider />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    {filterData && <CardContainer data={filterData} />}
                    {!filterData && <CircularProgress color="primary" />}
                </Grid>

                <Grid item xs={12} container spacing={1}>
                    <Grid item xs={12} md={6}>
                        {filterData && (
                            <VizLayer
                                title="Map Visualizer"
                                modalText="This visualization shows the runs/boundaries/other metrics scored across venues"
                                children={<MapVisualizer />}
                            />
                        )}
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        md={6}
                        direction="column"
                        justifyContent={"space-between"}
                    >
                        <Grid
                            item
                            xs={6}
                            container
                            spacing={1}
                            alignItems="stretch"
                        >
                            <Grid item xs={6}>
                                {filterData && (
                                    <VizLayer
                                        title="Pie Visualizer"
                                        modalText="This visualization intends to show the win percentage of a team over a given period of time."
                                        children={
                                            <PieVisualizer data={filterData} />
                                        }
                                    />
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                {filterData && (
                                    <VizLayer
                                        title="Fact Visualizer"
                                        modalText="This text displays a record of a team based on their performances."
                                    />
                                )}
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            {filterData && (
                                <VizLayer
                                    title="Line Visualizer"
                                    modalText="df"
                                />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
});
