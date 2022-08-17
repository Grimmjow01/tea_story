const React = require('react');

const Layout = require('./Layout');

module.exports = function Auth() {
  return (
    <Layout>
      <script defer src="js/register-login.js" />
      <div className="lvica">
        <div className="transparent">
          <h2 className="center colorGreen">Зарегистрируйтесь или войдите на сайт</h2>
          <div className="flexdiv">
            <div className="formTransparent">
              <form id="registerForm">
                <input name="login" type="text" className="form-control" id="exampleInput1" placeholder="Придумайте логин" />
                <input name="password" type="password" className="form-control" id="exampleInput2" placeholder="Придумайте пароль" />
                <button type="submit" className="btn btn-success">Создать аккаунт</button>
              </form>
            </div>
            <div className="formTransparent">
              <form id="loginForm">
                <input name="login" type="text" className="form-control" id="exampleInput3" placeholder="Введите логин" />
                <input name="password" type="password" className="form-control" id="exampleInput4" placeholder="Введите пароль" />
                <button type="submit" className="btn btn-success">Войти</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
