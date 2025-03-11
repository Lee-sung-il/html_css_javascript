function singSong() {
  console.log('DO');
  console.log('RE');
  console.log('MI');
}

function greet(firstName, lastName) {
  // console.log(`firstName is: ${firstName}`);
  console.log(`Hey there, ${firstName} ${lastName[0]} .`);
}

function repeat(str, numTimes) {
  let result = '';
  for (let i = 1; i <= numTimes; i++) {
    result += str;
  }
  console.log(result);
}

function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') return false;

  return x + y;

  // console.log('END OF FUNCTION!!!'); //이줄은 영원히 절대 실행되지 않습니다
}



// repeat('$',5);

// greet(`Clooney`,`George`);

/*
singSong();
singSong();
greet();
singSong();
singSong();
singSong();
singSong();
singSong();*/
