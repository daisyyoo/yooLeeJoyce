require('dotenv/config');
const express = require('express');
const pg = require('pg');
const jwt = require('jsonwebtoken');
// const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');

// const validator = require('email-validator');
const app = express();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());
app.use(staticMiddleware);

app.post('/api/saveTheDate', async (req, res, next) => {
  const { firstName, lastName, email } = req.body;
  try {
    const sql = `
    insert into "guestId"
    default values
    returning *
    `;
    const result = await db.query(sql);
    const guestId = result.rows[0].guestId;
    const token = jwt.sign(guestId, process.env.TOKEN_SECRET);

    const sql2 = `
      insert into "saveTheDate" ("guestId", "firstName", "lastName", "email")
      values ($1, $2, $3, $4)
      returning *
    `;
    const params2 = [guestId, firstName, lastName, email];
    const result2 = await db.query(sql2, params2);
    const [newGuest] = result2.rows;
    const guestInfo = { guestId, token, newGuest };
    res.status(201).json(guestInfo);
  } catch (err) { return next(err); }
});

app.get('/api/getSaveTheDateList', async (req, res, next) => {
  try {
    const sql = `
    select "firstName",
          "lastName",
          "email"
    from "saveTheDate"
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) { return next(err); }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
