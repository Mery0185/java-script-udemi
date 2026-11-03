"use strict";
// const category = "toys";
// console.log("https://someurl.com/" + category + "/" + "4");
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// // alert(`Hello, ${user}`);

// let incr = 10;
// let decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

//App 1

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: [],
//   genres: [],
//   privat: false,
//   start: function () {
//     personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (
//       personalMovieDB.count == "" ||
//       personalMovieDB.count == null ||
//       isNaN(personalMovieDB.count)
//     ) {
//       personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
//   },
//   rememberMyFilms: function () {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt("Один из последних просмотренных фильмов?").trim();
//       const b = +prompt("На сколько вы его оцените?");

//       if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//       } else {
//         console.log("error");
//         i--;
//       }
//     }
//   },
//   detectPersonalLevel: function () {
//     if (personalMovieDB.count < 10) {
//       alert("мало фильмов", "");
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//       alert("Класический зритель", "");
//     } else {
//       alert("Вы киноман", "");
//     }
//   },
//   showMyDB: function (hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
//   toggleVisibleMyDB: function () {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },
//   writeYourGenres: function () {
//     for (let i = 1; i < 2; i++) {
//       // let genre = prompt(`Ваш любимый жанр номер ${i}`);
//       // if (genre === null || genre === "") {
//       //   console.log("Вы ввели некорректные данные");
//       //   i--;
//       // } else {
//       //   personalMovieDB.genres[i - 1] = genre;
//       // }

//       let genres = prompt(
//         `Введите ваши любимые жанры через запятую`,
//       ).toLowerCase();
//       if (genres === null || genres === "") {
//         console.log("Вы ввели некорректные данные");
//         i--;
//       } else {
//         personalMovieDB.genres = genres.split(", ");
//         personalMovieDB.genres.sort();
//       }
//     }

//     personalMovieDB.genres.forEach((item, i) => {
//       console.log(`Любимый жанр номер ${i + 1} - это ${item}`);
//     });
//   },
// };
