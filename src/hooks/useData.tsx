import { useState, useEffect } from "react";
import { csv } from "d3";

// type DataProps = {
//     team: string;
//     year: number;
//     city: string;
//     matches: number;
//     runs: number;
//     fours: number;
//     sixes: number;
//     two_hundreds: number;
//     ten_wickets: number;
//     wickets: number;
//     wins: number;
//     toss_wins: number;
//     abb: string;
// };

export const useData = () => {
    const csvUrl =
        "https://raw.githubusercontent.com/sawlachintan/iplDash2/main/data/main_data.csv";
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        const row = (d: any): any => {
            const columns = Object.keys(d);
            for (let col of columns) {
                if (col !== "city" && col !== "team" && col !== "abb")
                    d[col] = +d[col];
            }
            return d;
        };
        csv(csvUrl, row).then(setData);
    }, []);
    return data;
};
