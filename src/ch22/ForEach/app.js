const number = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// const double = number.map(function (num){
//     return num * 2;
// })
//
// console.log(double);
/*number.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
});*/

/*
for (let el of number) {
    console.log(el);
}*/



const movies = [
  {
    title: 'Amadeus',
    score: 99
  },
  {
    title: 'Stand By me',
    score: 85
  },
  {
    title: 'Parasite',
    score: 95
  },
  {
    title: 'Alien',
    score: 90,
  }
];

const title = movies.map(function (movie) {
    return movie.title.toUpperCase();
})

console.log(title);

// movies.forEach(function(movie) {
//     console.log(`${movie.title} - ${movie.score}/100`);
// })

