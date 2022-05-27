import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Modal,
    Typography,
    Paper,
    Stack,
} from "@mui/material";
import { FC, useState } from "react";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

type VizProps = {
    children?: JSX.Element | JSX.Element[];
    modalText: string;
    title: string;
    someText?: string;
};

export const VizLayer: FC<VizProps> = ({
    children,
    modalText,
    title,
    someText,
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Card sx={{ borderRadius: "10px" }}>
            <CardHeader
                title={title}
                action={
                    <IconButton
                        onClick={handleOpen}
                        aria-label="visualization info"
                        color="primary"
                    >
                        <HelpOutlineRoundedIcon />
                    </IconButton>
                }
                sx={{ borderBottom: "2px solid" }}
            />
            <CardContent>
                {children}
                {someText}
            </CardContent>
            <Modal open={open} onClose={handleClose}>
                <Paper
                    sx={{
                        position: "absolute" as "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "50vw",
                        height: "50vh",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Stack
                        justifyContent={"center"}
                        alignItems="flex-start"
                        height={"100%"}
                        mx={2}
                    >
                        <Typography variant="h5">{modalText}</Typography>
                    </Stack>
                </Paper>
            </Modal>
        </Card>
    );
};
