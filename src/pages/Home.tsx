import { Typography } from "@mui/material";
import { FC } from "react";

type Props = {};

const Home: FC<Props> = (props) => {
    return (
        <Typography color={"primary"} style={{ minHeight: "100vh" }}>
            Home
        </Typography>
    );
};

export default Home;
