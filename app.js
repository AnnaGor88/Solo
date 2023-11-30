require('@babel/register');
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const path = require('path');

const app = express();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const userRouter = require('./router/user-router');
const indexRouter = require('./router/index-router');
const renderTemplate = require('./lib/renderTemplate');

const { PORT } = process.env;

const sessionConfig = {
  name: 'ourSession',
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 100 * 600 * 1000,
    httpOnly: true,
  },
};

const storeItems = new Map([{ price: 5000, name: 'Оплата услуг связи по оставленной заявке' }]);

app.use(expressSession(sessionConfig));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRouter);
app.use('/', indexRouter);

app.get('/*', (req, res) => {
  renderTemplate(Error, null, res);
});

app.listen(PORT, () => {
  console.log(`Listening ${PORT} Port`);
});
