import React from "react";
import { Typography, IconButton, Tooltip } from "@material-ui/core";
import { GitHub, Twitter, Instagram, LinkedIn, Mail } from '@material-ui/icons';

import useStyles from "./styles";

export default function MovieJumbotron({ movie }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <Tooltip title="GitHub">
                    <IconButton rel="noreferrer" aria-label="gitHub" href="https://github.com/SiddiqAfraaz/WATCHiT" target="_blank" className={classes.icon} size="small" color="secondary">
                        <GitHub />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Twitter">
                    <IconButton rel="noreferrer" aria-label="twitter" href="https://twitter.com/siddiqafraaz" target="_blank" className={classes.icon} size="small" color="secondary">
                        <Twitter />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Instagram">
                    <IconButton rel="noreferrer" aria-label="instagram" href="https://www.instagram.com/siddiqafraaz/" target="_blank" className={classes.icon} size="small" color="secondary">
                        <Instagram />
                    </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn">
                    <IconButton rel="noreferrer" aria-label="linkedIn" href="https://www.linkedin.com/in/siddiqafraaz" target="_blank" className={classes.icon} size="small" color="secondary">
                        <LinkedIn />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Mail">
                    <IconButton href="mailto:siddiqafraaz@gmail.com" aria-label="mail" className={classes.icon} size="small" color="secondary">
                        <Mail />
                    </IconButton>
                </Tooltip>
            </div>
            <Typography variant="body2" className={classes.subtitle}><em>Created By:</em></Typography><Typography variant="overline" className={classes.name}><strong>Siddique Afraaz</strong></Typography>
            <Typography variant="body2" className={classes.subtitle}><em>© Copyright 2021. All Rights Reserved</em></Typography>
        </div>
    )
}