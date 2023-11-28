const React = require('react');

const Navbar = ({ user }) => (
  <div className="navbar">
    <nav className="navigation">
      <ul className="navigation__list">

        {user ? (
          <>
            <p>
              Приветствуем,
              {user.name}
              !
            </p>
            <li>
              <ul className="insideLi">
                <li><a className="navigation__link logout" href="/logout">Выйти</a></li>
                <li className="line">/</li>
                {user.email === '1@1' ? <li><a className="navigation__link" href="/admin">Личный кабинет</a></li> : <li><a className="navigation__link" href="/profile">Личный кабинет</a></li>}

              </ul>
            </li>

            <li>
              <a className="navigation__link logo" href="/">
                <img className="imgLogo" src="/style/image/logo.svg" alt="LOGO" />
                Caller
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <ul className="insideLi">
                <li><a className="navigation__link" href="/login">Войти</a></li>
                <li className="line">/</li>
                <li><a className="navigation__link" href="/register">Зарегистрироваться</a></li>
              </ul>
            </li>

            <li>
              <a className="navigation__link logo" href="/">
                <img className="imgLogo" src="/style/image/logo.svg" alt="LOGO" />
                Caller
              </a>

            </li>
          </>
        )}
      </ul>
    </nav>
  </div>
);

module.exports = Navbar;
