import React from "react";
import { LinearProgress } from "@material-ui/core";

import useStyles from "./styles";
import logo from '../../../logo.svg';

export default function Movie({ loading }) {
    const classes = useStyles();
    return (
        <div className={classes.loadBG} style={{ display: loading ? "flex" : "none" }}>
            <div className={classes.content}>
                <img src={logo} alt="logo" className={classes.logo} />
                <LinearProgress className={classes.progressBar} />
            </div>
        </div>
    );
}