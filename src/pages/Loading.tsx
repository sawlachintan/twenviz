import { CircularProgress } from "@mui/material";

export const Loading = () => {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#1a1a1a",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
            }}
        >
            <CircularProgress color="primary" />
        </div>
    );
};
