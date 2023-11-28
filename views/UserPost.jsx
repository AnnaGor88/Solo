const React = require('react');

const Layout = require('./Layout');

const UserPost = ({ entryData }) => (
  <Layout>
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
        <div className="form-div">
          <h2 className="userForm">Форма для заполнения</h2>
          <form action="/profile" method="POST" id="form">
            <div className="myForm">
              <label className="form-label">
                <br />
                Куда звонили
                <br />
                <br />
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
                Результат звонка (максимально развернуто)
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
            <button type="submit" className="rewrite myBut" data-id={entryData.id}>
              Отправить обращение
            </button>
          </form>
        </div>

      </div>
    </div>

  </Layout>
);

module.exports = UserPost;
