import { IconButton, Tooltip } from "@mui/material";
import { FC, ReactElement } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";

type contactMeObj = {
    ariaLabel: string;
    icon: ReactElement;
    link: string;
};

const contactOptions: contactMeObj[] = [
    {
        ariaLabel: "GitHub",
        icon: <GitHubIcon />,
        link: "https://github.com/sawlachintan",
    },
    {
        ariaLabel: "Twitter",
        icon: <TwitterIcon />,
        link: "https://twitter.com/sawlachintan",
    },
    {
        ariaLabel: "Email me",
        icon: <MailIcon />,
        link: "mailto:sawlachintan@gmail.com",
    },
    {
        ariaLabel: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/chintansawla/",
    },
    {
        ariaLabel: "Website",
        icon: <LanguageIcon />,
        link: "https://sawlachintan.github.io/personal-website/",
    },
    {
        ariaLabel: "Code",
        icon: <CodeIcon />,
        link: "https://github.com/sawlachintan/twenviz",
    },
];

export const ContactMe: FC = () => {
    return (
        <>
            {contactOptions.map((d: contactMeObj): ReactElement => {
                return (
                    <Tooltip key={d.ariaLabel} title={d.ariaLabel} arrow>
                        <IconButton
                            href={d.link}
                            color="primary"
                            aria-label={d.ariaLabel}
                            target={"_blank"}
                        >
                            {d.icon}
                        </IconButton>
                    </Tooltip>
                );
            })}
        </>
    );
};
