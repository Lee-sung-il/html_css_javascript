const number = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

number.filter((n) => {
  return n < 4;
});

const movies = [
  {
    title: 'Amadeus',
    score: 99,
    year: 1984,
  },
  {
    title: 'Sharknado',
    score: 35,
    year: 2013,
  },
  {
    title: '13 Going On 30',
    score: 70,
    year: 2004,
  },
  {
    title: 'Stand By Me',
    score: 85,
    year: 1986,
  },
  {
    title: 'Waterworld',
    score: 62,
    year: 1995,
  },
  {
    title: 'Jingle All the Way',
    score: 71,
    year: 1996,
  },
  {
    title: 'Parasite',
    score: 95,
    year: 2019,
  },
  {
    title: 'Notting Hill',
    score: 77,
    year: 1999,
  },
  {
    title: 'Alien',
    score: 90,
    year: 1979,
  },
];

// let goodMovies = movies.filter((movie) =>{
//     return movie.score > 80;
// });

let goodMovies = movies.filter(m => m.score > 80);
let goodTitles = goodMovies.map(m => m.title);
let badMovies = movies.filter(m => m.score < 70);
let recentMovies = movies.filter(m => m.year > 2000);

// movies.filter(m => m.score > 80).map(m => m.title);

console.log(goodMovies);
console.log(goodTitles);
console.log(badMovies);
console.log(recentMovies);

