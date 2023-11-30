/* eslint-disable max-len */
require('dotenv').config();

const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bcrypt = require('bcrypt');
const { User, Todo } = require('./db/models');

const bot = new Telegraf(`${process.env.TOKEN}`);
bot.start((ctx) => ctx.reply('Введите почту и ваш заказ на прозвон одним сообщением'));
bot.on('message', async (ctx) => {
  const userReq = ctx.message.text;
  console.log(userReq);
  const newReq = userReq.split(' ');
  const userArrMail = newReq.filter((el) => el.includes('@'));
  if (!userArrMail.length) {
    ctx.reply('Введите почту и ваше просьбу в одном сообщении');
  } else {
    const userMail = userArrMail.join('');
    const newArr = newReq.filter((el) => el !== userMail);
    const userText = newArr.join(' ');
    const userName = ctx.message.from.first_name;
    const pass = '123';
    ctx.reply(`Спасибо, ваш заказ принят, ваш логин на сайте ${userMail} и пароль ${pass}`);

    const obj = {
      userName,
      userMail,
      pass,
      userText,
      title: 'Запрос с телеги',
    };

    await fetch(process.env.ADDRESS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
  }
});
bot.launch();

// // Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
