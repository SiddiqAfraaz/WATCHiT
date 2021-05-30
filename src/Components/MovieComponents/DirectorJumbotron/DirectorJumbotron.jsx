import React, { useState, useEffect } from "react";
import { Typography, Button, Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import JumbotronBG from "../../GeneralComponents/JumbotronBG/JumbotronBG";
import { GetPeople } from "../../../api/MovieDB";


import useStyles from "./styles";

export default function DirectorJumbotron({ bg, directorId }) {
    const classes = useStyles();
    const history = useHistory();
    const [director, setDirector] = useState({});

    useEffect(() => {
        async function setPerson() {
            const fetchedPerson = await GetPeople(directorId);
            setDirector(fetchedPerson);
        }
        if (directorId)
            setPerson();
    }, [directorId]);
    return (<div className={classes.root}>
        <div className={classes.content}>
            <JumbotronBG
                img={"https://image.tmdb.org/t/p/w1280" + bg}
            />
            <Typography variant="h5" className={classes.heading}>About The Director</Typography>
            {director.id && <div className={classes.details}>
                <Avatar
                    style={{ fontSize: "10vw" }}
                    alt={director.name}
                    src={"https://image.tmdb.org/t/p/w500/" + director.profile_path}
                    className={classes.avatar}
                />
                <div className={classes.directorContent}>
                    <Typography variant="h6" className={classes.name}>{director.name}</Typography>
                    <Typography variant="overline" className={classes.job}>Director</Typography>
                    <Typography
                        variant="body1"
                        className={classes.directorText}>
                        {director.biography}
                    </Typography>
                    <Button
                        className={classes.button}
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={() => { history.push(`/artist/${directorId}`) }}>{"See Profile"}</Button>
                </div>
            </div>}
        </div>
    </div>);
}