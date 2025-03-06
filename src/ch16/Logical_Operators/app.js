// const password = prompt('Enter your password');
//
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('VALID PASSWORD!');
// } else {
//     console.log('INCORRECT FORMAT FOR PASSWORD!');
// }

// 0 -5 free
// 5- 10 $10
// 10 - 65 $20
// 65 + free
// const age = 10;
// if (age >= 0 && age < 5 || age >= 65)  {
//     console.log('FREE');
// }else if (age >=5 && age < 10) {
//     console.log('$10');
// } else  if (age>=10 && age < 65) {
//     console.log('$20');
// }else {
//     console.log('INVALID AGE!');
// }

// let firstName =  prompt("enter your first name");
// if (!firstName) {
//     firstName = prom pt("TRY AGAIN !!!");
// }

// const age = 8;
// if (!(age >= 0 && age < 5 || age >= 65)){
//     console.log("YOU ARE NOT A BABY OR A SENIOR!");
// }

const day = 7;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
  case 7:
    console.log('WEEKEND!');
    break;
  default:
    console.log('I DONT KNOW THAT!');
}
