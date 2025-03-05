const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.get('*', (_req, res) => {
  res.send({ msg: 'JagarChat Service TEST' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});