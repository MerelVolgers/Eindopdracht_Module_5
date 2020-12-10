"use strict";

var movieList = document.getElementById("movie-list");
var radioButtons = document.querySelectorAll(".radio");
var searchBar = document.getElementById("searchbar");
var clearButton = document.getElementById("clear");

var addMoviesToDom = function addMoviesToDom(movies) {
  var listedMovies = movies.map(function (movie) {
    var movieLi = document.createElement("li");
    var posterLink = document.createElement("a");
    var moviePoster = document.createElement("img");
    movieLi.classList.add('movie__li');
    posterLink.classList.add('poster__link');
    moviePoster.classList.add('movie__poster');
    moviePoster.src = movie.Poster;
    posterLink.href = "http://www.imdb.com/title/".concat(movie.imdbID);
    posterLink.target = "_blank";
    movieList.appendChild(movieLi);
    movieLi.appendChild(posterLink);
    posterLink.appendChild(moviePoster);
  });
};

addMoviesToDom(movies);

var eventListeners = function eventListeners() {
  Array.from(radioButtons).forEach(function (radio) {
    radio.addEventListener('change', function (event) {
      movieFilter(event.target.id);
    });
  });
  searchBar.addEventListener('keydown', function (event) {
    movieFilter(event.target.value.toLowerCase());
    radioButtons.forEach(function (radio) {
      radio.checked = false;
    });
  });
  clearButton.addEventListener('click', function () {
    movieList.innerHTML = ' ';
    searchBar.value = '';
    radioButtons.forEach(function (radio) {
      radio.checked = false;
    });
    addMoviesToDom(movies);
  });
};

eventListeners(radioButtons, searchBar, clearButton);

var movieFilter = function movieFilter(event) {
  var filterMovies = movies;

  switch (event) {
    case 'x-men':
      filterMovies = movies.filter(function (movie) {
        return movie.Title.includes('X-Men');
      });
      break;

    case 'avengers':
      filterMovies = movies.filter(function (movie) {
        return movie.Title.includes('Avengers');
      });
      break;

    case 'batman':
      filterMovies = movies.filter(function (movie) {
        return movie.Title.includes('Batman');
      });
      break;

    case 'princess':
      filterMovies = movies.filter(function (movie) {
        return movie.Title.includes('Princess');
      });
      break;

    case 'new':
      filterMovies = movies.filter(function (movie) {
        return movie.Year > 2014;
      });
      break;

    default:
      filterMovies = movies.filter(function (movie) {
        return movie.Title.toLowerCase().includes(event);
      });
    // addMoviesToDom;
  }

  movieList.innerHTML = ' ';
  addMoviesToDom(filterMovies);
};