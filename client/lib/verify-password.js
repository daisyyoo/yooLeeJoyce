const argon2 = require('argon2');

const providedPassword = process.argv[2];

const hashedPassword = '$argon2id$v=19$m=4096,t=3,p=1$HY+0rj8XxoYApTB85JaW4w$cbrNHQfA5/c2jXQu4dD/c8kaNnSCf55sBa9Ei8cc6zY';

argon2
  .verify(hashedPassword, providedPassword)
  .then(isMatching => {
    console.log('Does your password match?', isMatching);
  })
  .catch(err => {
    console.error(err);
  });
