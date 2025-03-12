// const add = function(x, y) {
//     return x + y;
// }

// const add = (x, y) => {
//   return x + y;
// };
// console.log(add(9, 4));

const square = (x) => {
  return x * x;
};

console.log(square(9));

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

const rollDie = () => Math.floor(Math.random() * 6) + 1;
console.log(rollDie());

const add = (a, b) => a + b;

const movies = [
  {
    title: 'Amadeus',
    score: 99,
  },
  {
    title: 'Stand By me',
    score: 85,
  },
  {
    title: 'Parasite',
    score: 95,
  },
  {
    title: 'Alien',
    score: 90,
  },
];

// const newMovies = movies.map(function (movie) {
//   return `${movie.title} - (${movie.score / 10})`;
// });

// const newMovies = movies.map((movie) => {
//     return `${movie.title} - (${movie.score / 10})`;
// });
const newMovies = movies.map(
  (movie) => `${movie.title} - (${movie.score / 10}`,
);
