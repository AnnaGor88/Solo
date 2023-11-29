const React = require('react');

const Layout = require('./Layout');

const UserPost = ({ entryData, currentUser, user }) => (
  <Layout user={user}>
    <div className="main">

      <div className="main__top">
        <h1 className="prof__name">
          Заявка
        </h1>
      </div>
      <div className="user__form">
        <div className="user__cards">
          <div className="card">
            <h4 className="card__title">{entryData.title}</h4>
            <p className="card__text">{entryData.text}</p>
            <button type="submit" data-id={entryData.id} className="myBut">Выполнено</button>
          </div>
        </div>
        <div className="form-div" id="userForm">
          <h2 className="userForm">Форма для заполнения</h2>
          <form
            className="formFromOleg"
            action="https://formspree.io/f/xpzggjng"
            method="POST"
          >
            <label>
              Почта клиента:
              <br />
              <input className="emailInput" type="email" name="email" value={`${currentUser.email}`} />
            </label>
            <label>
              Подробный отчет о совершенном звонке:
              <br />
              <textarea className="textarea" name="message" />
            </label>
            <button className="myBut" type="submit">Отправить отчет о звонке</button>
          </form>
        </div>

      </div>
    </div>

  </Layout>
);

module.exports = UserPost;
