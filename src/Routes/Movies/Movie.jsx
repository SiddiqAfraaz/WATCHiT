import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Collapse, Typography, Tooltip } from "@material-ui/core";

import MovieJumbotron from "../../Components/MovieComponents/MovieJumbotron/MovieJumbotron";
import DirectorJumbotron from "../../Components/MovieComponents/DirectorJumbotron/DirectorJumbotron";
import PeopleList from "../../Components/GeneralComponents/PeopleList/PeopleList";
import MovieList from "../../Components/GeneralComponents/MovieList/MovieList";

import { GetMovie, GetSimilar } from "../../api/MovieDB";

import useStyles from "./styles";

function Movies() {
    const { id } = useParams();
    const classes = useStyles();
    const [movie, setMovie] = useState({});
    const [similar, setSimilar] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    let director;

    useEffect(() => {
        window.setLoading(true)
    }, []);

    useEffect(() => {
        async function setMoviePage() {
            const [fetchedMovie, fetchedSimilar] = await Promise.all([GetMovie(id), GetSimilar(id)]);
            setMovie(fetchedMovie);
            setSimilar(fetchedSimilar);
            window.setLoading(false);
        }
        setMoviePage();
    }, [id]);

    if (movie.credits) {
        director = movie.credits.crew.find((member) => member.job === "Director");
    }
    function handleMoreInfo() {
        setIsOpen((prevVal) => !prevVal);
    }

    return (
        <div>
            <MovieJumbotron movie={movie} onMoreInfoClick={handleMoreInfo} />
            <Collapse className={classes.moreInfo} in={isOpen}>
                <div className={classes.moreInfoWrapper}>
                    {movie.watch_providers && <Typography
                        variant="body1"
                        className={classes.streamHead}
                        style={{ fontSize: "1.2rem" }}>
                        Available to WATCHiT™ in:
                </Typography>}
                    {movie.watch_providers && <div className={classes.streamDiv}>
                        {movie.watch_providers.flatrate && <div>
                            <Typography
                                variant="body1"
                                className={classes.streamHead}>
                                Subscription:
                        </Typography>
                            {movie.watch_providers.flatrate.map((platform, index) => (<Tooltip key={index} title={platform.provider_name}><img className={classes.streamImg} src={"https://image.tmdb.org/t/p/w92" + platform.logo_path} alt={platform.provider_name} /></Tooltip>))}
                        </div>}
                        {movie.watch_providers.free && <div>
                            <Typography
                                variant="body1"
                                className={classes.streamHead}>
                                Free:
                        </Typography>
                            {movie.watch_providers.free.map((platform, index) => (<Tooltip key={index} title={platform.provider_name}><img className={classes.streamImg} src={"https://image.tmdb.org/t/p/w92" + platform.logo_path} alt={platform.provider_name} /></Tooltip>))}
                        </div>}
                        {(movie.watch_providers.rent && !movie.watch_providers.ads) && <div>
                            <Typography
                                variant="body1"
                                className={classes.streamHead}>
                                Rent:
                        </Typography>
                            {movie.watch_providers.rent.map((platform, index) => (<Tooltip key={index} title={platform.provider_name}><img className={classes.streamImg} src={"https://image.tmdb.org/t/p/w92" + platform.logo_path} alt={platform.provider_name} /></Tooltip>))}
                        </div>}
                        {(movie.watch_providers.buy && !movie.watch_providers.free) && <div>
                            <Typography
                                variant="body1"
                                className={classes.streamHead}>
                                Buy:
                        </Typography>
                            {movie.watch_providers.buy.map((platform, index) => (<Tooltip key={index} title={platform.provider_name}><img className={classes.streamImg} src={"https://image.tmdb.org/t/p/w92" + platform.logo_path} alt={platform.provider_name} /></Tooltip>))}
                        </div>}
                        {movie.watch_providers.ads && <div>
                            <Typography
                                variant="body1"
                                className={classes.streamHead}>
                                Ads:
                        </Typography>
                            {movie.watch_providers.ads.map((platform, index) => (<Tooltip key={index} title={platform.provider_name}><img className={classes.streamImg} src={"https://image.tmdb.org/t/p/w92" + platform.logo_path} alt={platform.provider_name} /></Tooltip>))}
                        </div>}
                    </div>}
                </div>
            </Collapse>
            <PeopleList name="Cast" people={movie.credits && movie.credits.cast} />
            <DirectorJumbotron
                bg={(movie.images && movie.images.backdrops.length > 1) && movie.images.backdrops[1].file_path}
                directorId={director && director.id}
            />
            <MovieList name="Similar Movies" movies={similar} />

        </div >
    );
}

export default Movies;