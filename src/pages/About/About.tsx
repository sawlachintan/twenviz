import { Typography, Stack, Link, List, ListItemText } from "@mui/material";
import { FC, ReactElement } from "react";
import "./About.css";

type sourceDataObj = {
    name: string;
    url: string;
    info: string;
};

const sourcesData: sourceDataObj[] = [
    { name: "Python", url: "https://python.org/", info: " - Parsing the data" },
    {
        name: "ReactJS",
        url: "https://reactjs.org/",
        info: " - Creating the website",
    },
    {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        info: " - Creating the website",
    },
    {
        name: "D3JS",
        url: "https://d3js.org/",
        info: " - Creating the visualizations",
    },
    {
        name: "Material UI",
        url: "https://mui.com/",
        info: " - Styling the website",
    },
];

export const About: FC = () => {
    return (
        <Stack mx={{ xs: 2, md: 7.5, lg: 25 }}>
            <Typography color={"primary"} variant="h3">
                About the Dashboard
            </Typography>
            <Typography color={"primary"} variant="body1">
                {`This dashboard is to let users understand their team's \
            performance over the years and places. While websites like Cricbuzz & ESPN let \
            users see player data, live scores, they don't have an \
            interactable site to see statistics in a visually appealing way. The Map Visualizer enables \
            the user to see a team's performance in a given city based on runs scored, wicket taken, \
            number of boundaries scored, etc. The Win Percentage provides a generalized overview of how the team has \
            performed in a period of time. The Line Chart presents the user with performance over time and informing \
            them whether a team has improved over time or not. The Facts Card is a work in progress feature, through which\
            a record would be displayed for the chosen team.`}
            </Typography>

            <Typography color={"primary"} variant="h3">
                About Me
            </Typography>
            <Typography color={"primary"} variant="body1">
                {`I am an undergraduate student at Purdue University majoring in Data \
            Science and Applied Statistics. I love cricket and analysing numbers \
            generated from the game, which led me to create this dashboard. I love watching \
            TV shows and Movies. Some of my all time favorite characters include Professor \
            (La casa de papel), Iron Man, & Dr. Strange!`}
            </Typography>

            <Typography color={"primary"} variant="h3">
                Tools Used
            </Typography>
            <ul style={{ listStyleType: "-" }}>
                {sourcesData.map((data): ReactElement => {
                    return (
                        <li key={data.name}>
                            <Typography color={"primary"} variant="body1">
                                {
                                    <Link
                                        style={{ textDecoration: "none" }}
                                        href={data.url}
                                        target={"_blank"}
                                    >
                                        {data.name}
                                    </Link>
                                }
                                {data.info}
                            </Typography>
                        </li>
                    );
                })}
            </ul>
            <Typography color={"primary"} variant="h3">
                Source of data
            </Typography>
            <ul style={{ listStyleType: "-" }}>
                <li style={{ listStyleType: "-" }}>
                    {
                        <Link
                            underline="none"
                            href="https://cricsheet.org/"
                            target={"_blank"}
                        >
                            Cricsheet
                        </Link>
                    }
                </li>
            </ul>
            <List>
                <ListItemText>
                    <Link
                        underline="none"
                        href="https://cricsheet.org/"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        Cricsheet
                    </Link>
                </ListItemText>
            </List>
            <Typography color={"primary"} variant="h3">
                Analytics
            </Typography>
            <Typography color={"primary"} variant="body1">
                {
                    <Link
                        href="https://marketingplatform.google.com/about/analytics/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        Google Analytics
                    </Link>
                }
            </Typography>
        </Stack>
    );
};
