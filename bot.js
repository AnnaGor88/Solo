require('dotenv').config();

const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bcrypt = require('bcrypt');
const { User, Todo, Done } = require('./db/models');

const bot = new Telegraf('6671274785:AAFPTzQQPy6uwasy-by6OwEOgZdT2_3yosk');
bot.start((ctx) => ctx.reply('Введите почту и ваш заказ на прозвон одним сообщением'));
bot.on('message', async (ctx) => {
  const userReq = ctx.message.text;
  console.log(userReq);
  const newReq = userReq.split(' ');
  const userArrMail = newReq.filter((el) => el.includes('@'));
  if (!userArrMail) {
    ctx.reply('Введите почту и ваше просьбу в одном сообщении');
  } else {
    const userMail = userArrMail.join('');
    const newArr = newReq.filter((el) => el !== userMail);
    const userText = newArr.join(' ');
    const userName = ctx.message.from.first_name;
    console.log('+++++++++', ctx.message.from);
    console.log('USEEER', userName);
    const pass = '123';
    ctx.reply(`Спасибо, ваш заказ принят, ваш логин на сайте ${userMail} и пароль ${pass}`);

    const hashPassword = await bcrypt.hash(pass, 7);
    console.log(hashPassword);
    console.log('!!!!!!!', userName);
    console.log('*********', userMail);
    const telegaUser = await User.create({ name: userName, email: userMail, password: '123' });
    console.log(telegaUser);
    const telegaTodo = await Todo.create({ title: 'запрос телеги', text: userText, userId: telegaUser.id });
  }
});
bot.launch();

// // Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
