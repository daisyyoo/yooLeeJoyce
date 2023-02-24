require('dotenv/config');
const express = require('express');
const pg = require('pg');
const jwt = require('jsonwebtoken');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const validator = require('email-validator');
const app = express();
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());
app.use(staticMiddleware);

app.post('/saveTheDate', (req, res, next) => {
  const token = req.get('x-access-token');
  const { firstName, lastName, email } = req.body;

  if (!token) {
    const sql = `
  insert into "guestId"
  default values
  returning *
  `;
    db.query(sql)
      .then(result => {
        const guestId = result.rows[0].guestId;
        const token = jwt.sign(guestId, process.env.TOKEN_SECRET);

        if (firstName.length > 2 || lastName.length > 2) {
          throw new ClientError(400, 'First and last name should be more than 2 characters.');
        }
        if (!validator.validate(email)) {
          throw new ClientError(400, 'email must be a valid email.');
        }

        const sql = `
      insert into "saveTheDate" ("guestId", "firstName", "lastName", "email")
      values ($1, $2, $3, $4)
      returning *
    `;

        const params = [guestId, firstName, lastName, email];
        db.query(sql, params)
          .then(result => {
            const [newGuest] = result.rows;
            const guestInfo = { guestId, token, newGuest };
            res.status(201).json(guestInfo);
          })
          .catch(err => next(err));
      });
  } else {
    const guestId = jwt.verify(token, process.env.TOKEN_SECRET);
    if (guestId) {
      throw new ClientError(200, 'You have already submitted your information.');
    }
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
