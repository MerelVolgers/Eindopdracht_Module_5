const movieList = document.getElementById ("movie-list");
const radioButtons = document.querySelectorAll(".radio");

const addMoviesToDom = (movies) =>{
    const listedMovies = movies.map (movie => {
        const movieLi = document.createElement ("li");
        const posterLink = document.createElement ("a");
        const moviePoster = document.createElement ("img");
        movieLi.classList.add('movie__li');
        posterLink.classList.add('poster__link');
        moviePoster.classList.add('movie__poster');
        moviePoster.src = movie.Poster;
        movieList.appendChild(movieLi);
        movieLi.appendChild(posterLink);
        posterLink.appendChild(moviePoster);
    });
};
addMoviesToDom(movies);

const eventListeners = () => {
    Array.from(radioButtons).forEach ((radio) => {
        radio.addEventListener ('change', (event) => {
        handleOnChangeEvent(event.target.id)
        });
    });
}
eventListeners(radioButtons);

const handleOnChangeEvent = (event) => {
    let filterMovies = movies;
    switch (event) {
            case 'x-men':
                console.log("ik ben een X-Men film")
                filterMovies = movies.filter (movie => movie.Title.includes('X-Men'));
                console.log(filterMovies);
                break;
            case 'avengers':
                console.log("ik ben een Avengers film")
                filterMovies = movies.filter (movie => movie.Title.includes('Avengers'));
                console.log(filterMovies);
                break;
            case 'batman':
                console.log("ik ben een Batman film")
                filterMovies = movies.filter (movie => movie.Title.includes('Batman'));
                console.log(filterMovies);
                break;
            case 'princess':
                console.log("ik ben een Princess film")
                filterMovies = movies.filter (movie => movie.Title.includes('Princess'));
                console.log(filterMovies);
                break;
            case 'new': 
                console.log("ik ben een nieuwe film")
                filterMovies = movies.filter (movie => movie.Year > 2014)
                console.log(filterMovies);
                break;
            default:
                addMoviesToDom;
    }
    const empty = () => {
        movieList.innerHTML = ' ';
    };
    empty();
    addMoviesToDom(filterMovies);
}