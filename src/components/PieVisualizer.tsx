import { useTheme } from "@mui/material";
import { sum, arc, pie, scaleOrdinal, select, interpolate } from "d3";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { buttonColors } from "../assets/ButtonColors";
import { FilterContext } from "../contexts/FilterContext";

type Props = {
    data: any;
};

const createPie = pie()
    .value((d: any) => d.value)
    .sort(null)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2);
const createArc: any = arc().innerRadius(75).outerRadius(100);

const makeData = (data: any) => {
    const wins: number = sum(data, (item: any) => item["wins"]);
    const matches: number = sum(data, (item: any) => item["matches"]);

    const winPercent = wins / matches;
    const pieData: any = [{ value: winPercent }, { value: 1 - winPercent }];

    return pieData;
};

export const PieVisualizer: FC<Props> = ({ data }) => {
    const { state } = useContext(FilterContext);
    const color = buttonColors[state.team];
    const theme = useTheme();
    console.log(theme);
    const nonWinColor = theme.palette.mode === "light" ? "#444444" : "#bbbbbb";
    console.log(nonWinColor);
    const colorScale = scaleOrdinal([color, nonWinColor]);

    const pieData: any = makeData(data);

    const pieRef = useRef<any>(null);
    const svgRef = useRef<any>(null);
    const cache = useRef(pieData);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    // useEffect(() => {
    //     const resizeObserver = new ResizeObserver((event) => {
    //         setWidth((event[0].contentBoxSize[0].inlineSize / 4) * 3);
    //         setHeight(event[0].contentBoxSize[0].blockSize);
    //     });
    //     if (svgRef) {
    //         resizeObserver.observe(svgRef.current);
    //     }

    //     const group = select(pieRef.current);

    //     group.attr("transform", `translate(${width}, ${height})`);
    // }, [svgRef, width, height]);

    useEffect(() => {
        const main_data = createPie(pieData);
        const prevData = createPie(cache.current);
        const group = select(pieRef.current);

        group.attr("transform",`translate(${100}, ${100})`)

        const groupWithData = group.selectAll("g.arc").data(main_data);

        groupWithData.exit().remove();

        const groupWithUpdate = groupWithData
            .enter()
            .append("g")
            .attr("class", "arc");

        const path = groupWithUpdate
            .append("path")
            .merge(groupWithData.select("path.arc"));

        const arcTween = (d: any, i: number): any => {
            const interpolator = interpolate(prevData[i], d);
            return (t: any) => createArc(interpolator(t));
        };

        path.attr("class", "arc")
            .attr("d", createArc)
            .attr("fill", (d: any, i: any) => colorScale(i))
            .transition()
            .duration(650)
            .attrTween("d", arcTween);

        cache.current = makeData(data);
    }, [data, colorScale, pieData, height, width]);

    return (
        <div style={{ justifyItems: "center" }}>
            <svg ref={svgRef} width={"100%"} height={"100%"}>
                <g ref={pieRef}></g>
            </svg>
        </div>
    );
};
