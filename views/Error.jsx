const React = require('react');

const Layout = require('./Layout');

const Error = () => (
  <Layout>
    <div className="main__error">
      <h1 className="prof__name">
        Нет такой страницы!!!
      </h1>

      <div className="error">
        <img src="/style/image/err.jpg" alt="ERROR" />
      </div>
    </div>
  </Layout>
);

module.exports = Error;
