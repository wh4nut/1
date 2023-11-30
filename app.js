const numberOfFilms = +prompt('How much films do you see before?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const lastFilmQuestion = prompt('Name of last film?', ''),
	filmRateQuestion = +prompt('Score of this film from 1 o 10', ''),
	lastFilmQuestion2 = prompt('Name of last film?', ''),
	filmRateQuestion2 = +prompt('Score of this film from 1 o 10', '');

personalMovieDB.movies[lastFilmQuestion] = filmRateQuestion;
personalMovieDB.movies[lastFilmQuestion2] = filmRateQuestion2;

console.log(personalMovieDB);
