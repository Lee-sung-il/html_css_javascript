const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(12);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log('salt: ', salt);
//   console.log('hash: ', hash);
// };

const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log('hash: ', hash);
};

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log('LOGGED YOU IN! SUCCESSFUL MATCH!');
  } else {
    console.log('INCORRECT!');
  }
};

hashPassword('monkey');

login('monkey', '$2b$12$NfRFzuI58LU6/0shgLtEXenbhzQT4dWnhPX/I7W.5zY5ZcNw5pcGy');
