const myMath = {
  PI: Math.PI,
  square: function (num) {
    return Math.pow(num, 2);
  },
  cube: function (num) {
    return Math.pow(num, 3);
  },
};
const myMath2 = {
  PI: Math.PI,
  square(num) {
    return Math.pow(num, 2);
  },
  cube(num) {
    return Math.pow(num, 3);
  },
};
console.log(myMath.square(5));


const cat = {
    name : 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`THIS IS : ${this}`);
        console.log(`${this.name} says meow`);
    }
}

const meow2 = cat.meow;

