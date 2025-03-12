console.log(Math.max(13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 7, 6, 4, 2, 53456));
console.log(Math.min(2, 5, 1));

const nums = [3, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 7, 6, 4, 2, 53456];
console.log(nums);
console.log(Math.max(nums));
console.log(Math.max(... nums));
console.log(Math.min(... nums));

console.log("asd","as","asdasd","asdsa");

console.log(nums)
console.log(...nums)

console.log('hello')
console.log(...'hello')


const cats = ['Blue','Scout','Rocket'];
const dogs = ['Rusty','Wyatt'];

const allPets = [...cats, ...dogs];
// console.log(allPets);


const feline = {
    legs : 4,
    family: 'Felidae'
};

const canine = {
    isFurry: true,
    family: 'Caninae'
};


console.log({...feline, color: 'black'});


const catDog = {...feline, ...canine};
console.log(catDog);



const dataFromForm = {
    email : "blueman@gamle.com",
    password: "tobias123",
    username: "tfunke"
};

const newUser = {...dataFromForm, id: 12345, isAdmin: false};