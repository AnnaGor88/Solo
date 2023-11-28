/* eslint-disable max-len */
const indexRouter = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
const { User, Todo, Done } = require('../db/models');
const Register = require('../views/Register');
const Login = require('../views/Login');
const Admin = require('../views/Admin');
const UserPost = require('../views/UserPost');
const Profile = require('../views/Profile');

indexRouter.get('/', async (req, res) => {
  try {
    const { user } = req.session;
    renderTemplate(Main, { user }, res);
  } catch (error) {
    console.error(error);
  }
});

indexRouter.get('/admin', async (req, res) => {
  try {
    const { user } = req.session;
    if (!user) {
      res.redirect('/');
    } else {
      const cards = await Todo.findAll({ raw: true });
      if (user.email !== '1@1') {
        res.redirect('/');
      } else {
        renderTemplate(Admin, { user, cards }, res);
      }
    }
  } catch (error) {
    console.error(error);
  }
});

indexRouter.get('/login', (req, res) => {
  renderTemplate(Login, null, res);
});

indexRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.redirect('/register');
    } else {
      const passwordCheck = await bcrypt.compare(password, user.password);
      if (passwordCheck) {
        if (user.email === '1@1') {
          req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
          };
          res.redirect('/admin');
        } else {
          req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
          };
          res.redirect('/profile');
        }
      } else {
        res.redirect('/register');
      }
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

indexRouter.get('/register', (req, res) => {
  renderTemplate(Register, null, res);
});

indexRouter.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 7);
    console.log(hashPassword);
    const user = await User.create({ name, email, password: hashPassword });
    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    res.redirect('/profile');
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

indexRouter.get('/logout', (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.clearCookie('ourSession');
        res.json({ msg: 'Success' });
      }
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

indexRouter.get('/profile', async (req, res) => {
  try {
    const { user } = req.session;
    const myRep = await Todo.findAll({ where: { userId: user.id }, raw: true });
    renderTemplate(Profile, { user, myRep }, res);
  } catch (error) {
    console.error(error);
  }
});

indexRouter.post('/profile', async (req, res) => {
  try {
    const { user } = req.session;
    const userReport = req.body;
    const todo = await Todo.create({ title: userReport.title, text: userReport.text, userId: user.id });
    const todoData = todo.get({ plain: true });
    res.json(todoData);
  } catch (error) {
    console.error(error);
  }
});

indexRouter.get('/admin/:id', async (req, res) => {
  try {
    console.log(req.params);
    const entry = await Todo.findOne({ where: { id: req.params.id } });
    const entryData = entry.get({ plain: true });
    console.log('!!!!!!!!!!!!!!', entryData);
    renderTemplate(UserPost, { entryData }, res);
  } catch (error) {
    console.error(error);
  }
});

indexRouter.post('/admin/:id', async (req, res) => {
  try {
    console.log(req.body);
    const todo = await Todo.findOne({ where: { id: req.body.id } });
    const entryData = todo.get({ plain: true });
    console.log('!!!!!!!!!!!!!!', entryData.userId);
    await Done.create({ title: entryData.title, text: entryData.text, userId: entryData.userId });
    res.json(entryData);
  } catch (error) {
    console.error(error);
  }
});

indexRouter.delete('/admin/:id', async (req, res) => {
  try {
    console.log('*****', req.params);
    await Todo.destroy({ where: { id: req.params.id } });
    res.end();
  } catch (error) {
    console.error(error);
  }
});

module.exports = indexRouter;
