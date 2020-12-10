const movieList = document.getElementById ("movie-list");
const radioButtons = document.querySelectorAll(".radio");
const searchBar = document.getElementById("searchbar");
const clearButton = document.getElementById("clear");

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
        // movie.Title.toLowerCase();
    });
};
addMoviesToDom(movies);

const eventListeners = () => {

    Array.from(radioButtons).forEach ((radio) => {
        radio.addEventListener ('change', (event) => {
        movieFilter(event.target.id)
        });
    });

    // searchBar.addEventListener ('keyup', (event) => {
    //     // 1. grab the search-term(input of user)
    //     const term = e.target.value.toLowerCase();
    //     // 2. grab all the li tags to connect it to the search element
    //     const grabMovies = list.getElementsByTagName('li');
    //     Array.from(grabMovies).forEach(function(grabMovie){
    //         const title = movie.Title;
    //         if (title.toLowerCase().indexOf(term) != -1){
    //             grabMovie.style.display = 'block';
    //         } else {
    //             grabMovie.style.display = 'none';
    //         }
    //     });
    // filter de uitkomst op de input'value'
    
        
        // movieFilter(event.target.value.toLowerCase());
    //     radioButtons.forEach(radio => { 
    //         radio.checked = false;
    //     });
    // });
    

    clearButton.addEventListener ('click', () => {
        movieList.innerHTML = ' ';
        searchBar.value = '';
        radioButtons.forEach(radio => { 
            radio.checked = false;
        })
        addMoviesToDom(movies);
    });
};
eventListeners(radioButtons, searchBar, clearButton);


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
                addMoviesToDom;
    }
    movieList.innerHTML = ' ';
    addMoviesToDom(filterMovies);
}

// default? >>
// filterMovies = movies.filter(movie => movie.Title.toLowerCase().includes(event));
