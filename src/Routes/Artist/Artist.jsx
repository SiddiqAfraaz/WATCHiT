import React, { useState, useEffect } from "react";
import { GetPeople, GetPopularPeople } from "../../api/MovieDB";
import { Typography, Paper, Collapse, useMediaQuery } from "@material-ui/core";
import { BrokenImage, ExpandLess, ExpandMore } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import MovieGrid from "../../Components/GeneralComponents/MovieGrid/MovieGrid";
import JumbotronBG from "../../Components/GeneralComponents/JumbotronBG/JumbotronBG";
import PeopleList from "../../Components/GeneralComponents/PeopleList/PeopleList";

import useStyles from "./styles";


function Artist() {
    const { id } = useParams();
    const [artist, setArtist] = useState({});
    const [popularArtists, setPopularArtists] = useState([]);
    const classes = useStyles();
    const isSmallScreen = useMediaQuery('(max-width:1100px)');
    const [isOpen, setIsOpen] = useState(false);
    const isPosterAvail = artist.profile_path !== null;

    useEffect(() => {
        window.setLoading(true);
    }, []);

    useEffect(() => {
        async function setArtistPage() {
            let [fetchedArtist, fetchedPopular] = await Promise.all([GetPeople(id), GetPopularPeople()]);
            setArtist(fetchedArtist);
            fetchedPopular = fetchedPopular.filter((popularArtist) => popularArtist.id.toString() !== id);
            setPopularArtists(fetchedPopular);
            window.setLoading(false);
        }
        setArtistPage();
    }, [id]);

    artist.birthday && (artist.birthday = new Date(artist.birthday));
    artist.deathday && (artist.deathday = new Date(artist.deathday));
    function calculateAge() {
        var diff_ms = (artist.deathday ? artist.deathday.getTime() : Date.now()) - artist.birthday.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }


    return (
        <div className={classes.root}>
            <div className={classes.container1} style={{ padding: "5vw 1vw" }}>
                <JumbotronBG img={artist.id && "https://image.tmdb.org/t/p/w1280" + (artist.movies[0] ? artist.movies[0].backdrop_path : artist.movie_credits.crew[0].backdrop_path)} />
                <Paper className={classes.artistPhoto} style={{ backgroundImage: artist.profile_path && "url(https://image.tmdb.org/t/p/h632" + artist.profile_path + ")" }} >
                    {!isPosterAvail &&
                        <div className={classes.brokenImage}>
                            <BrokenImage className={classes.imageIcon} />
                            <Typography variant="overline" className={classes.artistPhotoName}>{artist.name}</Typography>
                        </div>
                    }
                </Paper>
                <div className={classes.artistDetails}>
                    <Typography
                        variant="h4"
                        className={classes.artistName}>
                        <strong>{artist.name}</strong>
                    </Typography>
                    <Typography
                        variant="body1"
                        className={classes.artistSubtitle}>
                        {`Known for ${artist.gender === 1 ? "her" : "his"} ${artist.known_for_department}`}
                    </Typography>
                    <Typography
                        variant="body1"
                        className={classes.artistBio}>
                        {artist.biography}
                    </Typography>
                </div>
                {isSmallScreen && <Typography
                    variant="body2"
                    onClick={() => { setIsOpen((prevVal) => !prevVal) }}
                    className={classes.collapseButton}>
                    {isOpen ? "View Less" : "View More Info"} {isOpen ? <ExpandLess /> : <ExpandMore />}
                </Typography>}
            </div>
            <div className={classes.container2}>
                <Collapse className={classes.artistInfo} in={isOpen || !isSmallScreen}>
                    {artist.id && <div>
                        <Typography
                            variant="h6"
                            className={classes.heading}>
                            <strong>Personal Info</strong>
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.artistBio}>
                            <strong>{`Known ${artist.known_for_department} Credits:`}</strong> <br />{artist.id && (artist.known_for_department === "Acting" ? artist.movies.length : artist.movie_credits.crew.filter((movie) => movie.department === artist.known_for_department).length)}
                        </Typography>
                        {artist.gender !== null && <Typography
                            variant="body1"
                            className={classes.artistBio}>
                            <strong>Gender:</strong> <br />{artist.gender === 1 ? "Female" : "Male"}
                        </Typography>}
                        {artist.birthday && <Typography
                            variant="body1"
                            className={classes.artistBio}>
                            <strong>Date of Birth:</strong> <br />{artist.birthday.toDateString().slice(4)} <em>{`(${calculateAge()} years old)`}</em>
                        </Typography>}
                        {artist.deathday && <Typography
                            variant="body1"
                            className={classes.artistBio}>
                            <strong>Date of Death:</strong> <br />{artist.deathday.toDateString().slice(4)}
                        </Typography>}
                        {artist.place_of_birth && <Typography
                            variant="body1"
                            className={classes.artistBio}>
                            <strong>Place of Birth:</strong> <br />{artist.place_of_birth}
                        </Typography>}
                        {artist.also_known_as.length > 0 && <Typography
                            variant="body1"
                            className={classes.artistBio}>
                            <strong>Also Known as:</strong><br />{artist.id && artist.also_known_as.map((name, index) => <span key={index}>{name}<br /></span>)}
                        </Typography>}
                    </div>}
                </Collapse>
                <div className={classes.movies}>
                    <Typography
                        variant="h6"
                        className={classes.heading}>
                        <strong>Credited Movies</strong>
                    </Typography>
                    {(artist.id && artist.movies.length > 0) && <MovieGrid name="Acting" movies={artist.movies} />}
                    {artist.depts && artist.depts.map((dept, index) => (
                        <MovieGrid key={index} name={dept} movies={artist.movie_credits.crew.filter((movie) => movie.department === dept)} />)
                    )}
                </div>
            </div>
            <PeopleList name="Popular Artists" people={popularArtists} />
        </div>
    );
}

export default Artist;