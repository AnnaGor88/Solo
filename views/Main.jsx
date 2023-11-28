const React = require('react');

const Layout = require('./Layout');

const Main = ({ user }) => (
  <Layout user={user}>
    <div className="container all_content">
      <div className="all__top">
        <img className="all__img" src="style/image/555.png" alt="333" />
      </div>
      <div className="top">
        <h1 className="main__title neon-text">Приветствуем!</h1>
        <div className="main__top">
          <p className="main__top-title neon-text">Это сервис для всех, кто не хочет тратить свои ресурсы на различные звонки.</p>
          <p className="main__top-title neon-text">Наши менеджеры позвонят за вас и постараются решить все без вашего участия, вам нужно будет лишь заполнить форму в личном кабинете и ждать письма на электронную почту с полным отчетом по звонку.</p>
        </div>
      </div>
      <div className="content">
        <h2 className="content__title">Примеры того, с чем мы можем помочь:</h2>
        <hr />
        <div className="content__cards">
          <div className="content__card">
            <p className="content__title">Вызов сервиса (клинеры, сантехники, электрики и др.)</p>
          </div>
          <div className="content__card">
            <p className="content__title">Запись куда-либо (поликлиника, сервис, салон и т.д.)</p>
          </div>
          <div className="content__card">
            <p className="content__title">Выяснить ситуацию с экстренными службами (узнать в ЖКХ вопросы по подаче воды/газа/электроэнергии и т.д.)</p>
          </div>
          <div className="content__card">
            <p className="content__title">Поздравить "нелюбимых" родственников с праздниками </p>
          </div>
        </div>
      </div>
    </div>

  </Layout>
);

module.exports = Main;
