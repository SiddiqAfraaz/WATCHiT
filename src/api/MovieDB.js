import axios from "axios";

let userRegionCode = "IN";
// axios.get(`http://ip-api.com/json/`).then(({ data }) => {
//     userRegionCode = data.countryCode;
//     console.log(userRegionCode)
// });

const genres = [{
        "id": 10751,
        "name": "Family",
    },
    {
        "id": 28,
        "name": "Action",
    },
    {
        "id": 10749,
        "name": "Romance",
        "listName": "Romantic Movies"
    },
    {
        "id": 80,
        "name": "Crime",
    },
    {
        "id": 27,
        "name": "Horror",
    },
    {
        "id": 12,
        "name": "Adventure",
    },
    {
        "id": 35,
        "name": "Comedy",
        "listName": "Comedies"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 99,
        "name": "Documentary",
        "listName": "Documentries"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History",
        "listName": "Historical Movies"
    },
    {
        "id": 10402,
        "name": "Music",
        "listName": "Musical"
    },
    {
        "id": 9648,
        "name": "Mystery",
        "listName": "Mysteries"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie",
        "listName": "TV Movies"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
];
const curatedLists = [{
        name: "Family Movie Night Collections",
        filters: `&certification_country=US&certification=PG`
    },
    {
        name: "World of Action",
        filters: "&with_genres=28%2C12"
    },
    {
        name: "Live, Love, Laugh",
        filters: "&with_genres=35%2C10749&without_genres=16"
    },
    {
        name: "Partner in Crime",
        filters: "&with_genres=53%2C80"
    },
    {
        name: "Mysteries of Horror",
        filters: "&with_genres=27%2C9648"
    }
];

function setGenres(genreIDs) {
    return genreIDs.map((genreID) =>
        (genres.filter((genre) => genre["id"] === genreID))[0]["name"]
    )
}


export async function GetCuratedLists() {
    const randomNums = [];
    while (randomNums.length < 3) {
        let r = Math.floor(Math.random() * curatedLists.length);
        if (randomNums.indexOf(r) === -1) randomNums.push(r);
    }
    while (randomNums.length < 5) {
        let r = Math.floor(Math.random() * genres.length);
        if (randomNums.indexOf(r) === -1) randomNums.push(r);
    }
    try {
        const fetchedLists = await Promise.all([
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${curatedLists[randomNums[0]].filters}&watch_region=IN&with_watch_monetization_types=flatrate&page=${Math.floor(Math.random() * 5) + 1}`),
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${curatedLists[randomNums[1]].filters}&watch_region=IN&with_watch_monetization_types=flatrate&page=${Math.floor(Math.random() * 5) + 1}`),
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genres[randomNums[2]].id}&watch_region=IN&with_watch_monetization_types=flatrate&page=${Math.floor(Math.random() * 5) + 1}`),
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genres[randomNums[3]].id}&watch_region=IN&with_watch_monetization_types=flatrate&page=${Math.floor(Math.random() * 5) + 1}`),
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genres[randomNums[4]].id}&watch_region=IN&with_watch_monetization_types=flatrate&page=${Math.floor(Math.random() * 5) + 1}`),
        ]);
        let curated = [
            { name: curatedLists[randomNums[0]].name, list: fetchedLists[0] },
            { name: curatedLists[randomNums[1]].name, list: fetchedLists[1] },
            { name: genres[randomNums[2]].listName || `${genres[randomNums[2]].name} Movies`, list: fetchedLists[2] },
            { name: genres[randomNums[3]].listName || `${genres[randomNums[3]].name} Movies`, list: fetchedLists[3] },
            { name: genres[randomNums[4]].listName || `${genres[randomNums[4]].name} Movies`, list: fetchedLists[4] },
        ]
        curated = curated.map(({ name, list }) => {
            let reducedList = list.data.results;
            reducedList = reducedList.filter((result) => (result.poster_path));
            reducedList.sort(function(a, b) { return 0.5 - Math.random() });
            return { name: name, list: reducedList };
        });
        curated.sort(function(a, b) { return 0.5 - Math.random() });
        return curated;
    } catch (error) {
        return error;
    }
}
export async function GetTrending(page = 1) {
    try {
        let { data: { results } } = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`);
        for (const result of results) {
            result["genres"] = setGenres(result["genre_ids"]);
        }
        results = results.filter((result) => (result.poster_path));
        return results;
    } catch (error) {
        return error.response.status;
    }
}
export async function GetPopular(page = 1) {
    try {
        let { data: { results } } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}&region=IN`);
        return results;
    } catch (error) {
        return error.response.status
    }
}
export async function GetNowPlaying() {
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setMonth(endDate.getMonth() - 1);
    try {
        let { data: { results } } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&region=${userRegionCode}%2CUS&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${startDate.toISOString().slice(0,10)}&release_date.lte=${endDate.toISOString().slice(0,10)}&watch_region=${userRegionCode}&with_watch_monetization_types=flatrate`);
        return results;
    } catch (error) {
        return error.response.status
    }
}
export async function GetTrendingPeople() {
    try {
        const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        return results;
    } catch (error) {
        return error.response.status
    }
}


export async function GetMovie(movieID) {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=null&append_to_response=watch%2Fproviders%2Ccredits%2Creleases`);
        data.watch_providers = data['watch/providers'].results[`${userRegionCode}`];
        data.release_date = new Date(data.release_date);
        let temp = data.releases.countries.filter((rate) => rate.iso_3166_1 === userRegionCode || rate.iso_3166_1 === "US")[0];
        if (typeof temp === 'undefined' && data.releases.countries.length > 0) {
            data.content_rating = data.releases.countries[0].certification;
        } else if (typeof temp !== 'undefined') {
            data.content_rating = temp.certification;
        } else {
            data.content_rating = null;
        }
        return data;
    } catch (error) {
        return error;
    }
}
export async function GetSimilar(movieID) {
    try {
        const [{ data: { results: recommend } }, { data: { results: similar } }] = await Promise.all([
            axios.get(`https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`),
            axios.get(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`),
        ]);
        recommend.push.apply(recommend, similar)
        return recommend;
    } catch (error) {
        return error.response.status
    }
}


export async function GetPeople(peopleID) {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/person/${peopleID}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&append_to_response=movie_credits`);
        data.movies = data.movie_credits.cast;
        data.movies = data.movies.filter((movie) => {
            if (movie.character)
                return !movie.character.includes("Special Appearance")
            else
                return true
        });
        let depts = data.movie_credits.crew.map((movie) => movie.department);
        data.depts = [...new Set(depts)];
        return data;
    } catch (error) {
        return error.response.status;
    }
}
export async function GetPopularPeople() {
    try {
        const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
        return results;
    } catch (error) {
        return error.response.status
    }
}


export async function GetMovieSearch(query, page = 1) {
    try {
        const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
        return results;
    } catch (error) {
        return error.response.status
    }
}
export async function GetPeopleSearch(query, page = 1) {
    try {
        const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false&region=${userRegionCode}`);
        return results;
    } catch (error) {
        return error.response.status
    }
}

//GetTrending().then((result) => console.log(result));