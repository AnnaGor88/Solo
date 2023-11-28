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

    const response1 = await fetch(`/admin/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    const response2 = await fetch(`/admin/${id}`, {
      method: 'DELETE',
    });
    window.location.href = 'http://localhost:3000/admin/';
  }
});
