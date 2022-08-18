const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="css/homeStyles.css" />
      <div className="home">
        <div className="container-xl home_container">
          <h3 className="margin20">Найди свой чай</h3>
          <div className="home_map" id="home_map" />
        </div>
      </div>
      <script src="https://api-maps.yandex.ru/2.1/?apikey=c2e40954-6437-4c4c-a882-90652ab22e72&lang=ru_RU" />
      <script src="../js/homeScript.js" />
    </Layout>
  );
};
