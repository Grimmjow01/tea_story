const React = require('react');

module.exports = function Layout({ children, newUser }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/publicStyles.css" />
        <link rel="stylesheet" href="/css/homeStyles.css" />
        <title>Tea-Story</title>
        <header className="backColorHeader">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid backColor">
              <a className="navbar-brand" href="/home"><img src="/img/teapot-2-erase.png" alt="..." width="75px" height="50px" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                  {
                    newUser
                      ? (
                        <>
                          <li className="nav-item">
                            <a className="nav-link active fontColor" aria-current="page" href="/profile">Личный кабинет</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active fontColor" aria-current="page" href="/auth/logout">Выйти</a>
                          </li>
                        </>
                      )
                      : (
                        <li className="nav-item">
                          <a className="nav-link active fontColor" aria-current="page" href="/auth">Войти или зарегистрироваться</a>
                        </li>
                      )
                  }
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </head>
      {children}
      <body />
    </html>
  );
};
