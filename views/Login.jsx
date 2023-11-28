const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="wrapper__top">
          <img src="" alt="" />
        </div>
        <div className="cardlogin container">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
            <form action="/login" method="POST">
              <div className="mb-3">
                <label className="form-label">
                  <br />
                  Email
                  <br />
                  <input
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  <br />
                  Password
                  <br />
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </label>
              </div>
              <button type="submit" className="btn btn-primary login-btn">
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
