import React, { useState } from "react";
import { Typography, Button, Paper, ButtonGroup, Collapse, Tooltip } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import { Star, StarBorder, BrokenImage, KeyboardArrowDown } from '@material-ui/icons';


import JumbotronBG from "../../GeneralComponents/JumbotronBG/JumbotronBG";

import useStyles from "./styles";

export default function MovieJumbotron({ movie }) {
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
                    {movie.id && `${movie.content_rating ? movie.content_rating : "UNRATED"}`}  |
                </Typography>
                <Typography
                    variant="body1"
                    className={classes.movieSubtitle}>
                    {(movie.id && movie.runtime) ? (`${Math.floor(movie.runtime / 60)} hr ${movie.runtime % 60} min   |`) : " "}
                </Typography>
                {movie.genres && movie.genres.map((genre, i) => {
                    return (i < 3 && <Typography
                        key={i}
                        variant="body2"
                        className={classes.movieSubtitle}>
                        {(i !== 2 && i !== movie.genres.length - 1) ? genre.name + "," : genre.name}
                    </Typography>)
                })}
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
                <ButtonGroup disabled={!movie.watch_providers} className={classes.buttonGrp} variant="contained" size="large" color="secondary">
                    <Button className={classes.button} href={movie.watch_providers && movie.watch_providers.link}><small style={{ fontSize: "0.5rem" }}>WHERE TO</small><br /><strong style={{ fontSize: "1rem" }}>WATCHiT™</strong></Button>
                    <Button size="small" onClick={() => { setIsOpen((prevVal) => !prevVal) }}><KeyboardArrowDown /></Button>
                </ButtonGroup>
                {!movie.watch_providers && <Typography display="block" variant="caption" color="error"> *This content is not available to stream in your region*</Typography>}
                {movie.watch_providers && <Collapse in={isOpen}>
                    <div className={classes.streamDiv}>
                        {movie.watch_providers.flatrate && <div className={classes.streamSec}>
                            <Typography
                                variant="body1"
                                className={classes.streamHead}>
                                Flatrate:
                        </Typography>
                            {movie.watch_providers.flatrate.map((platform) => (<Tooltip title={platform.provider_name}><img className={classes.streamImg} src={"https://image.tmdb.org/t/p/w92" + platform.logo_path} alt={platform.provider_name} /></Tooltip>))}
                        </div>}
                        {movie.watch_providers.free && <div className={classes.streamSec}>
                            <Typography
                                variant="body1"
                                className={classes.streamHead}>
                                Free:
                        </Typography>
                            {movie.watch_providers.free.map((platform) => (<Tooltip title={platform.provider_name}><img className={classes.streamImg} src={"https://image.tmdb.org/t/p/w92" + platform.logo_path} alt={platform.provider_name} /></Tooltip>))}
                        </div>}
                        {(movie.watch_providers.rent && !movie.watch_providers.ads) && <div className={classes.streamSec}>
                            <Typography
                                variant="body1"
                                className={classes.streamHead}>
                                Rent:
                        </Typography>
                            {movie.watch_providers.rent.map((platform) => (<Tooltip title={platform.provider_name}><img className={classes.streamImg} src={"https://image.tmdb.org/t/p/w92" + platform.logo_path} alt={platform.provider_name} /></Tooltip>))}
                        </div>}
                        {(movie.watch_providers.buy && !movie.watch_providers.free) && <div className={classes.streamSec}>
                            <Typography
                                variant="body1"
                                className={classes.streamHead}>
                                Buy:
                        </Typography>
                            {movie.watch_providers.buy.map((platform) => (<Tooltip title={platform.provider_name}><img className={classes.streamImg} src={"https://image.tmdb.org/t/p/w92" + platform.logo_path} alt={platform.provider_name} /></Tooltip>))}
                        </div>}
                        {movie.watch_providers.ads && <div className={classes.streamSec}>
                            <Typography
                                variant="body1"
                                className={classes.streamHead}>
                                Ads:
                        </Typography>
                            {movie.watch_providers.ads.map((platform) => (<Tooltip title={platform.provider_name}><img className={classes.streamImg} src={"https://image.tmdb.org/t/p/w92" + platform.logo_path} alt={platform.provider_name} /></Tooltip>))}
                        </div>}
                    </div>
                </Collapse>}
                {/* Future Update */}
                {/* <IconButton className={classes.addButton} size="small" color="secondary"><Add /></IconButton> */}
            </div>
        </div>

    </div>)
}
