const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ newUser, teas }) {
  const activeTea = teas.pop();
  console.log(activeTea);
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="css/homeStyles.css" />
      <div className="home">
        <div className="container-xl home_container col">
          <h3 className="margin20">Найди свой чай</h3>
          <div className="home_map" id="home_map" />
          <br />
          <div id="carouselExampleControls" className="carousel slide col-md-6 col-sm-8 col-8" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card home-card">
                  <img src={activeTea.image_url} className="card-img-top img-fluid" alt="..." />
                  <div className="card-body ">
                    <h5 className="card-title">{activeTea.title}</h5>
                    <p className="card-text">{activeTea.description}</p>
                    <a href={`/tea/${activeTea.id}`} className="btn btn-success">Подбробнее</a>
                  </div>
                </div>
              </div>
              {
                teas.map((tea) => (
                  <div className="carousel-item" key={tea.id}>
                    <div className="card home-card">
                      <img src={tea.image_url} className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{tea.title}</h5>
                        <p className="card-text">{tea.description}</p>
                        <a href={`/tea/${tea.id}`} className="btn btn-success">Подбробнее</a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <script src="https://api-maps.yandex.ru/2.1/?apikey=c2e40954-6437-4c4c-a882-90652ab22e72&lang=ru_RU" />
      <script src="../js/homeScript.js" />
    </Layout>
  );
};
