// function sum() {
//     console.log(arguments)
// }
//
// sum(1,2,3,4,5,6,7,8,1,23,121);



// function sum(...nums) {
//   return nums.reduce((total, el) => total + el);
// }
//
// console.log(sum(5, 5,6,7,8,9));

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

raceResults("Tammy","Todd","Tina","Trevor","Travis");
