// require('dotenv').config();
// const nodemailer = require('nodemailer');

const form = document.querySelector('#form');
const userCards = document.querySelector('.user__cards');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  console.log(e.target);

  const formTodo = {
    title: e.target[0].value,
    text: e.target[1].value,
  };

  const response = await fetch('/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formTodo),
  });

  if (response.status === 200) {
    const result = await response.json();
    console.log(result);
    const div = document.createElement('div');
    div.classList.add('card');
    div.id = e.target.id;
    div.innerHTML = `
    <h4 class="card__title">${result.title}</h4>
    <p class="card__text">${result.text}</p>`;

    userCards.appendChild(div);
    console.log(e.target[0].value);
    e.target[0].value = '';
    e.target[1].value = '';
  } else {
    console.log('ошибка создания');
  }
});

const list = document.querySelector('.list');

list?.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    const { id } = e.target.dataset;
    window.location.href = `http://localhost:3000/admin/${id}`;
  }
});

const userCard = document.querySelector('.user__cards');
console.log(userCard);

userCard?.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log(e.target.dataset);
    const { id } = e.target.dataset;
    const obj = { id };

    await fetch(`/admin/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    await fetch(`/admin/${id}`, {
      method: 'DELETE',
    });
    window.location.href = 'http://localhost:3000/admin/';
  }
});

// Отправка писем

// const send = nodemailer.createTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   port: 465,
//   auth: {
//     user: 'annagoriachevajs@gmail.com',
//     pass: '9021988annA',
//   },
// });

// const userMail = 'goryachevaanny@gmail.com';
// const userText = 'Превед-медвед';

// const mailOptions = {
//   from: 'annagoriachevajs@gmail.com',
//   to: userMail,
//   subject: 'Отчет о звонке по вашей заявке',
//   text: userText,
// };

// send.sendMail(mailOptions, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('The email was sent successfully');
//   }
// });
