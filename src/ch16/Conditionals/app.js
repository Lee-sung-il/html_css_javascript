// console.log('BEFORE CONDITIONAL');
// let random = Math.random();
// if (random < 0.5) {
//   console.log('YOUR NUMBER IS LESS THAN 0.5!!!');
//   console.log(random);
//   console.log('AFTER CONDITIONAL');
// }
// if (random >= 0.5) {
//   console.log('YOUR NUMBER IS GREATER THAN 0.5!!!');
//   console.log(random);
// }

// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();
//
// if (dayOfWeek === 'monday') {
//   console.log('UGHHH I HATE MONDAYS!');
// } else if (dayOfWeek === 'saturday') {
//   console.log('YAY I LOVE SATURDAYS!');
// } else if (dayOfWeek === 'friday') {
//   console.log('FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!');
// } else {
//   console.log('MEH');
// }
// else if (dayOfWeek === 'Tuesday') {
//   console.log('MEH');
// } else if (dayOfWeek === 'Wednesday') {
//   console.log('MEH');
// } else if (dayOfWeek === 'Thursday') {
//   console.log('MEH');
// }

/*
     0-5 - FREE
     5 - 10 CHILD $10
     10 - 65 ADULT $20
     65+ SENIOR $10
 */
const age = 89;
if (age < 5) {
  console.log('You are a baby. You get in for free!');
} else if (age < 10) {
  console.log('You are a child. You Pay $10');
} else if (age < 65) {
  console.log('You are a adult. You Pay $20');
}else{
  console.log('You are a Senior. You Pay $10');
}
