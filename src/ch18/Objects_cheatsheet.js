const person = {
  firstName: 'Mick',
  lastName: 'Jagger',
};

console.log(person);

const kitchenSink = {
  favNum: 92319023,
  isFunny: true,
  colors: ['red', 'orange'],
};

const nums = [23, 45, 99];
console.log(nums[1]);

console.log(person['lastName']);
console.log(kitchenSink['colors']);

console.log(person.firstName);

const years = {
  1999: 'GOOD',
  2020: 'BAD',
};

console.log(years);
console.log(years['1999']);
console.log(years['2020']);
console.log(years[1999]);

const dumbdumb = {
  true: 'dat',
  null: 'ajndlkanlanl',
};

console.log(dumbdumb);
console.log(dumbdumb['true']);
console.log(dumbdumb['null']);
console.log(person);
console.log(person.firstName);
console.log(person['firstName']);
console.log(person['first' + 'Name']);

let birthYear = 2020
years.birthYear;
console.log(years[birthYear]);

const midterms = {
  danielle : 96,
  thomas : 78
}

console.log(midterms);
console.log(midterms.thomas = 79);
console.log(midterms);
midterms.thomas = 'C+';
midterms['danielle'] = 'A';
console.log(midterms);
midterms.ezra;
midterms.ezra = 'B+';
midterms['antonio'] = 'A-';
console.log(midterms);


const comments = [
  {username : 'Tammy', text: 'lollollol',votes : 9},
  {username : 'FishBoi', text: 'glub glub', votes : 12387},
];

console.log(comments[1]);
console.log(comments[1].text);