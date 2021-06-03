import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { KeyboardArrowRight } from '@material-ui/icons';
import JumbotronBG from "../../../GeneralComponents/JumbotronBG/JumbotronBG";

import useStyles from "./styles";

export default function CarouselCard({ movie }) {
    const classes = useStyles();
    const history = useHistory();
    return <div>
        <JumbotronBG img={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path} noBlur={true} />
        <div className={classes.movie}>
            <Typography
                variant="h4"
                color="inherit"
                className={classes.movieName}>
                <strong>{movie.title}</strong>
            </Typography>
            {movie.genres && movie.genres.map((genre, i) => {
                return (i < 3 && <Typography
                    key={i}
                    variant="overline"
                    className={classes.movieGenre}>
                    {i !== 0 ? " | " + genre : genre}
                </Typography>)
            })}
            <Typography
                variant="body1"
                className={classes.movieText}>
                {movie.overview}
            </Typography>
            <Button
                className={classes.button}
                variant="contained" size="large"
                onClick={() => { history.push(`/movies/${movie.id}`) }}
                color="secondary">
                {"View More"}<KeyboardArrowRight />
            </Button>

        </div>
    </div>
}
