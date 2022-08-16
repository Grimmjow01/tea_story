const React = require('react');

const Layout = require('./Layout');

module.exports = function Auth() {
  return (
    <Layout>
      <div className="lvica">
        <div className="transparent">
          <h2 className="center colorGreen">Зарегистрируйтесь или войдите на сайт</h2>
          <div className="flexdiv">
            <div className="formTransparent">
              <form action="/register" id="registrForm">
                {/* <label htmlFor="exampleInput1" className="form-label">Login</label> */}
                <input name="login" type="text" className="form-control" id="exampleInput1" placeholder="Введите логин" />
                {/* <label htmlFor="exampleInput2" className="form-label">Password</label> */}
                <input name="password" type="password" className="form-control" id="exampleInput2" placeholder="Введите пароль" />
                <button type="submit" className="btn btn-success">Создать аккаунт</button>
              </form>
            </div>
            <div className="formTransparent">
              <form action="/login" id="loginForm">
                {/* <label htmlFor="exampleInput1" className="form-label">Login</label> */}
                <input name="login" type="text" className="form-control" id="exampleInput1" placeholder="Введите логин" />
                {/* <label htmlFor="exampleInput2" className="form-label">Password</label> */}
                <input name="password" type="password" className="form-control" id="exampleInput2" placeholder="Введите пароль" />
                <button type="submit" className="btn btn-success">Войти</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
