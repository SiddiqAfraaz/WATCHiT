import React, { useState } from "react";
import { Typography, ButtonBase, Collapse, useMediaQuery, Tooltip } from "@material-ui/core";
import { BrokenImage, ExpandLess, ExpandMore } from '@material-ui/icons';
import { useHistory } from "react-router-dom";

import useStyles from "./styles";

export default function MovieGrid({ name, movies }) {
    const classes = useStyles();
    const isSmallScreen = useMediaQuery('(max-width:500px)');
    const isTabletScreen = useMediaQuery('(max-width:1100px)');
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const wrapThreshold = isSmallScreen ? 3 : 5;
    movies = movies.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)
    movies = movies.sort((a, b) => (b.popularity - a.popularity));
    return (
        <div>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.heading}>
                {name} <em className={classes.subtitle}>({movies.length})</em>
            </Typography>
            <Collapse collapsedHeight={isSmallScreen ? "45vw" : isTabletScreen ? "27vw" : "21.5vw"} in={isOpen}>
                <div className={classes.movieList}>
                    {movies.map((movie, index) => {
                        const isPosterAvail = movie.poster_path !== null;
                        return (
                            <Tooltip title={movie.name || movie.title} placement="bottom" arrow>
                                <ButtonBase
                                    key={index}
                                    className={classes.card}
                                    style={{ backgroundImage: isPosterAvail && "url(https://image.tmdb.org/t/p/w342" + movie.poster_path + ")" }}
                                    onClick={() => { history.push(`/movies/${movie.id}`) }}>
                                    {!isPosterAvail &&
                                        <div className={classes.brokenImage}>
                                            <BrokenImage className={classes.imageIcon} />
                                            <Typography variant="overline" className={classes.movieName}>{movie.name || movie.title}</Typography>
                                        </div>
                                    }
                                </ButtonBase>
                            </Tooltip>)
                    }
                    )}
                </div>
            </Collapse>
            {movies.length > wrapThreshold && <Typography
                variant="body2"
                onClick={() => { setIsOpen((prevVal) => !prevVal) }}
                className={classes.collapseButton}>
                {isOpen ? "View Less" : "View All"} {isOpen ? <ExpandLess /> : <ExpandMore />}
            </Typography>}
        </div>
    );
}