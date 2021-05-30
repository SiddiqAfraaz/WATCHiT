import React, { useState, useEffect } from "react";
import Carousel from "../../Components/HomeComponents/Carousel/Carousel";
import MovieList from "../../Components/GeneralComponents/MovieList/MovieList";
import PeopleList from "../../Components/GeneralComponents/PeopleList/PeopleList";
import { GetPopular, GetNowPlaying, GetTrending, GetCuratedLists, GetTrendingPeople } from "../../api/MovieDB";


function Home() {
    const [lists, setLists] = useState([{
        listName: '',
        listMovies: []
    }]);
    const [curatedLists, setCuratedLists] = useState([{
        listName: '',
        listMovies: []
    }]);
    const [popularPeople, setPopularPeople] = useState([]);
    const [carouselMovies, setCarouselMovies] = useState([]);

    useEffect(() => {
        window.setLoading(true);
    }, []);

    useEffect(() => {
        async function setHomepageLists() {
            const [nowPlaying, popular, trending, curated, people] = await Promise.all([
                GetNowPlaying(),
                GetPopular(),
                GetTrending(),
                GetCuratedLists(),
                GetTrendingPeople(),
            ])
            setCarouselMovies(trending.slice(0, 8));
            setPopularPeople(people);
            setLists([
                {
                    listName: "What's Popular",
                    listMovies: popular
                },
                {
                    listName: "Now Playing",
                    listMovies: nowPlaying
                },
            ]);
            setCuratedLists(curated.map((list) => {
                return { listName: list.name, listMovies: list.list }
            }));
            window.setLoading(false);
        }
        if (lists[0].listName === '') {
            setHomepageLists();
        }
    });

    return (
        <div>
            <Carousel movies={carouselMovies} />
            {lists.map((list, index) =>
                <MovieList key={index} name={list.listName} movies={list.listMovies} />)}
            <PeopleList name="Trending Artists" people={popularPeople} />
            {curatedLists.map((list, index) =>
                <MovieList key={index} name={list.listName} movies={list.listMovies} />)}
        </div >
    );
}

export default Home;