import { Grid } from "@mui/material";
import { FC, useRef, createRef, useEffect, useContext } from "react";
import { select, format, interpolateNumber, sum } from "d3";
import { buttonColors } from "../assets/ButtonColors";
import { FilterContext } from "../contexts/FilterContext";
import { CustomCard } from "./CustomCard";
const cardAreas: string[] = [
    "runs",
    "wickets",
    "fours",
    "sixes",
    "wins",
    "toss_wins",
];

type CardsProp = {
    data: any;
};

export const CardContainer: FC<CardsProp> = ({ data }) => {
    const { state } = useContext(FilterContext);
    const cardRefs = useRef(
        cardAreas.map(() => createRef<HTMLDivElement | any>())
    );

    useEffect(() => {
        for (let j: number = 0; j < cardAreas.length; j++) {
            if (cardRefs.current[j]) {
                const prevCardVal: number = parseInt(
                    cardRefs.current[j].current.textContent.replace(",", "")
                );

                const newCardVal: number = sum<number>(
                    data,
                    (item: any) => item[cardAreas[j]]
                );

                select(cardRefs.current[j].current)
                    .text(format(",.0f")(newCardVal))
                    .transition()
                    .duration(450)
                    .tween("text", function () {
                        const i = interpolateNumber(prevCardVal, newCardVal);
                        return (t) => {
                            this.textContent = format(",.0f")(i(t));
                        };
                    });
            }
        }
    }, [data]);

    return (
        <Grid
            container
            direction={"row"}
            spacing={2}
            justifyContent="center"
            alignItems="center"
        >
            {cardAreas.map((d, i) => {
                switch (d) {
                    case "toss_wins":
                        d = "Toss Wins";
                        break;
                    case "fours":
                        d = "4s";
                        break;
                    case "sixes":
                        d = "6s";
                        break;
                    default:
                        break;
                }
                return (
                    <Grid key={d} item xs={6} md={4} lg={2}>
                        <CustomCard
                            refIndex={cardRefs.current[i]}
                            valueType={d.charAt(0).toUpperCase() + d.slice(1)}
                            color={buttonColors[state.team]}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};
