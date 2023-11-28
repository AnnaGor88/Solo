const React = require('react');

const Layout = require('./Layout');

const Admin = ({ cards, user }) => (
  <Layout user={user}>
    <div className="main container">
      <div className="main__cont">
        <h1>
          Hello,
          {' '}
          {user.name}
        </h1>
      </div>
      <div className="list">
        {cards.map((el) => (
          <div className="user__content" key={el.id}>
            <h3 className="user__text">{el.title}</h3>
            <p className="user__text">{el.text}</p>
            <button type="submit" data-id={el.id} className="myBut">Подробнее</button>
          </div>

        ))}
      </div>
    </div>

  </Layout>
);

module.exports = Admin;
