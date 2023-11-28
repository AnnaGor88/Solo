const React = require('react');
const Navbar = require('./Navbar');

const Layout = ({ children, user }) => (
  <html lang="ru">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/style/style.css" />
      <script defer src="/style/js/index.js" />
      <link rel="shortcut icon" href="/style/image/favicon.png" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;400;700&display=swap" rel="stylesheet" />
      <title>Caller</title>
    </head>
    <body className="body">
      <header className="header container">
        <Navbar user={user} />
      </header>
      {children}
      <script src="/style/js/logout.js" />
    </body>
  </html>
);
module.exports = Layout;
