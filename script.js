const movieList = document.getElementById ("movie-list");
const radioButtons = document.querySelectorAll(".radio");
const searchBar = document.getElementById("searchbar");
const clearButton = document.getElementById("clear");
const logo = document.getElementById("logo");

const addMoviesToDom = (movies) =>{
    const listedMovies = movies.map (movie => {
        const movieLi = document.createElement ("li");
        const posterLink = document.createElement ("a");
        const moviePoster = document.createElement ("img");
        movieLi.classList.add('movie__li');
        posterLink.classList.add('poster__link');
        moviePoster.classList.add('movie__poster');
        moviePoster.src = movie.Poster;
        posterLink.href = `http://www.imdb.com/title/${movie.imdbID}`;
        posterLink.target = `_blank`;
        movieList.appendChild(movieLi);
        movieLi.appendChild(posterLink);
        posterLink.appendChild(moviePoster);
    });
};
addMoviesToDom(movies);

const eventListeners = () => {

    Array.from(radioButtons).forEach ((radio) => {
        radio.addEventListener ('change', (event) => {
        movieFilter(event.target.value)
        searchBar.value='';
        });
    });
    
    searchBar.addEventListener ('keyup', (event) => {
        movieFilter(event.target.value.toLowerCase());
        radioButtons.forEach(radio => radio.checked = false);
    });

    clearButton.addEventListener ('click', () => {
        movieList.innerHTML = ' ';
        searchBar.value = '';
        radioButtons.forEach(radio => radio.checked = false);
        addMoviesToDom(movies);
    });

    logo.addEventListener ('mouseover', (event) => {
        logo.src="images/welcome.jpg"
    });
    logo.addEventListener('mouseout', (event) =>{
        logo.src="images/popcorn.jpg"
    });
};
eventListeners(radioButtons, searchBar, clearButton, logo);

const movieFilter = (event) => {
    let filterMovies = movies;
    switch (event) {
            case 'x-men':
                filterMovies = movies.filter (movie => movie.Title.includes('X-Men'));
                break;
            case 'avengers':
                filterMovies = movies.filter (movie => movie.Title.includes('Avengers'));
                break;
            case 'batman':
                filterMovies = movies.filter (movie => movie.Title.includes('Batman'));
                break;
            case 'princess':
                filterMovies = movies.filter (movie => movie.Title.includes('Princess'));
                break;
            case 'new': 
                filterMovies = movies.filter (movie => movie.Year > 2014)
                break;
            default:
                filterMovies = movies.filter(movie => movie.Title.toLowerCase().includes(event));
    }
    movieList.innerHTML = ' ';
    addMoviesToDom(filterMovies);
}