require('dotenv').config({ path: __dirname + '/.env' });
require('./utils/smartcontract');

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const appRouter = require('./routes/app.routes');

// port
const PORT = process.env.PORT || 3000;

// app declaration
const app = express();
app.set('port', PORT);

// set the view engine to ejs
app.set('view engine', 'ejs');

// This disables the `contentSecurityPolicy` middleware but keeps the rest.
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(cors());

// basic middlewares
app.use(express.json());

app.use('/app', appRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Client :)');
});

// 404 route
app.use((req, res, next) => {
  res.json({
    status: false,
    message: 'Error 404',
  });
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

module.exports = app;
