import React, { useState } from "react";
import { Typography, Button, Paper, ButtonGroup, Tooltip } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import { Star, StarBorder, BrokenImage, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';


import JumbotronBG from "../../GeneralComponents/JumbotronBG/JumbotronBG";

import useStyles from "./styles";

export default function MovieJumbotron({ movie, onMoreInfoClick }) {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const isPosterAvail = movie.poster_path !== null;
    return (<div className={classes.root}>
        <div className={classes.movie}>
            <JumbotronBG
                img={movie.backdrop_path && "https://image.tmdb.org/t/p/w1280" + movie.backdrop_path}
            />
            <Paper className={classes.poster} style={{ backgroundImage: movie.poster_path && "url(https://image.tmdb.org/t/p/w500" + movie.poster_path + ")" }} >
                {!isPosterAvail &&
                    <div className={classes.brokenImage}>
                        <BrokenImage className={classes.imageIcon} />
                        <Typography variant="overline" className={classes.moviePosterName}>{movie.name || movie.title}</Typography>
                    </div>
                }
            </Paper>
            <div className={classes.movieDetails}>
                <Typography
                    variant="h4"
                    className={classes.movieName}>
                    <strong>{movie.name || movie.title}</strong> {movie.id && `(${movie.release_date.getFullYear()})`}
                </Typography>
                <Typography
                    variant="body1"
                    className={classes.movieSubtitle}>
                    {movie.id && `${movie.content_rating ? movie.content_rating : "NR"}`}
                </Typography>
                <Typography
                    variant="body1"
                    className={classes.movieSubtitle}>
                    {movie.id && `|  ${movie.language}`}
                </Typography>
                <Typography
                    variant="body1"
                    className={classes.movieSubtitle}>
                    {(movie.id && movie.runtime) ? `|  ${((Math.floor(movie.runtime / 60) > 0 ? `${Math.floor(movie.runtime / 60)} hr` : "") + ` ${movie.runtime % 60} min`)}` : " "}
                </Typography>
                <div className={classes.ratingWrapper}>

                    <div className={classes.rating}>
                        <Rating
                            precision={0.5}
                            value={movie.vote_average / 2}
                            readOnly
                            icon={<Star fontSize="large" className={classes.ratingIcon} />}
                            emptyIcon={<StarBorder fontSize="large" className={classes.ratingIcon} />}
                        />
                        <Typography variant="body1" className={classes.ratingTextLarge}>
                            {movie.vote_average !== 0 ? (Math.round((movie.vote_average / 2) * 10) / 10) : "N/A"}
                        </Typography>
                        <Typography variant="body1" className={classes.ratingText}>
                            /5
                            </Typography>
                    </div>
                </div>
                <Typography
                    variant="body1"
                    className={classes.movieText}>
                    {movie.overview}
                </Typography>
                {movie.genres && <div>
                    <Typography
                        variant="body2"
                        className={classes.movieSubtitle}>
                        <strong>Genre:</strong>
                    </Typography>
                    {movie.genres.map((genre, i) => (i < 4 && <Typography
                        key={i}
                        variant="body2"
                        className={classes.movieSubtitle}>
                        {(i !== 3 && i !== movie.genres.length - 1) ? genre.name + " |" : genre.name}
                    </Typography>))}
                </div>}
                {movie.id && <div>
                    <Typography
                        variant="body2"
                        className={classes.movieSubtitle}>
                        <strong>Release Date:</strong>&nbsp;{movie.release_date.toDateString() !== "Invalid Date" ? movie.release_date.toDateString().slice(4) : "N/A "}&nbsp;({movie.status})
                    </Typography>
                </div>}
                <ButtonGroup disabled={!movie.watch_providers} className={classes.buttonGrp} variant="contained" size="large" color="secondary">
                    <Button className={classes.button} href={movie.watch_providers && movie.watch_providers.link} target="_blank" rel="noreferrer"><small style={{ fontSize: "0.5rem" }}>WHERE TO</small><br /><strong style={{ fontSize: "1rem" }}>WATCHiT™</strong></Button>
                    <Tooltip title="Stream Info"><Button size="small" onClick={() => { setIsOpen((prevVal) => !prevVal); onMoreInfoClick() }}>{isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</Button></Tooltip>
                </ButtonGroup>
                {!movie.watch_providers && <Typography display="block" variant="caption" color="error"> *This content is not available to stream in your region*</Typography>}
            </div>
        </div>

    </div>)
}
