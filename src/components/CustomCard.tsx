import {
    Card,
    CardContent,
    ThemeProvider,
    createTheme,
    Typography,
    useTheme,
} from "@mui/material";
import { FC } from "react";

type CardProps = {
    refIndex?: any;
    color: string;
    valueType: string;
};

export const CustomCard: FC<CardProps> = ({ refIndex, color, valueType }) => {
    const theme = useTheme();
    const cardTheme = createTheme(theme, {
        palette: {
            text: {
                primary: color,
            },
        },
        typography: {
            h3: {
                fontWeight: 700,
            },
            h5: {
                fontWeight: 600,
            },
        },
    });

    return (
        <ThemeProvider theme={cardTheme}>
            <Card
                sx={{
                    borderRadius: "10px",
                    transition: "background-color 0.45s ease-in-out",
                    textAlign: "center",
                }}
                elevation={1}
            >
                <CardContent>
                    <Typography
                        color={"text.primary"}
                        ref={refIndex}
                        variant="h3"
                    >
                        0
                    </Typography>
                    <Typography
                        pt={"0.4vh"}
                        color={"text.primary"}
                        variant="h5"
                    >
                        {valueType}
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
};
