/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/iframe-has-title */
const React = require('react');

const Layout = require('./Layout');

const Profile = ({ user, myRep }) => (
  <Layout user={user}>
    <div className="main">

      <div className="main__top">
        <iframe frameBorder="no" scrolling="no" width="280" height="150" src="https://yandex.ru/time/widget/?geoid=213&lang=ru&layout=horiz&type=analog&face=serif" />
        <div className="all__top">
          <img className="all__image" src="/style/image/3333.png" alt="3333" />
        </div>
        <h1 className="prof__name">
          Рады помочь,
          {user.name}
        </h1>
      </div>
      <div className="user__form">
        <div className="user__cards">
          <h3 className="user__theme">Мои обращения</h3>
          {myRep.map((el) => (
            <div className="card" id={user.id}>
              <h4 className="card__title">{el.title}</h4>
              <p className="card__text">{el.text}</p>
            </div>
          ))}
        </div>
        <div className="form-div">
          <h2 className="userForm">Форма для заполнения</h2>
          <form action="/profile" method="POST" id="form">
            <div className="myForm">
              <label className="form-label">
                <br />
                Куда звонить
                <br />
                <br />
                {' '}
                <input
                  name="number"
                  className="form-control"
                  id="exampleInputNumber"
                />
              </label>
            </div>
            <div className="myForm">
              <label className="form-label">
                <br />
                Суть обращения(максимально подробно)
                <br />
                <br />
                <textarea
                  cols={80}
                  rows={20}
                  name="raport"
                  type="text"
                  className="form-area"
                  id="exampleInputText"
                />
              </label>
            </div>
            <button type="submit" className="send .myBut" id={user.id}>
              Отправить обращение
            </button>
          </form>
        </div>
        <button className="myBut" id="pay">Оплатить услугу</button>
      </div>
    </div>

  </Layout>
);

module.exports = Profile;
