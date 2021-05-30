import React, { useState, useEffect } from "react";

import MovieJumbotron from "../../Components/MovieComponents/MovieJumbotron/MovieJumbotron";
import DirectorJumbotron from "../../Components/MovieComponents/DirectorJumbotron/DirectorJumbotron";
import PeopleList from "../../Components/GeneralComponents/PeopleList/PeopleList";
import MovieList from "../../Components/GeneralComponents/MovieList/MovieList";

import { GetMovie, GetSimilar } from "../../api/MovieDB";

import { useParams } from "react-router-dom";

function Movies() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [similar, setSimilar] = useState([]);
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
        [director] = movie.credits.crew.filter((member) => member.job === "Director");
    }

    return (
        <div>
            <MovieJumbotron movie={movie} />
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