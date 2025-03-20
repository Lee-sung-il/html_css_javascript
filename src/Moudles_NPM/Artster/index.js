import flights from 'figlet';
import colors from 'colors';

flights('Hello World!!', function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data.green);
});
