const e = require('express');
const React = require('react');
const Layout = require('./Layout');

module.exports = function InfoTea(newInfo) {
  const {
    id, title, location, image_url, discription, sort_tea,
  } = newInfo.onlyInfo;
  const mas = newInfo.comments;
  const activUser = newInfo.oneUser;
  const { role, newUser } = newInfo;
  console.log('image_url--->', image_url);
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="../css/info.css" />
      <script defer src="../js/newComment.js" />
      <div className="tea-div Content" id={id}>
        <div className="card card-entire mb-3 loginId card-flex" id={activUser.id} max-width="250px;">
          <div className="row g-0 login info-tea-flex" id={newUser}>
            <div className="topString">
              <div className="col-md-4">
                <img src={image_url} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8 col-sm-4">
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <h3 className="card-text">
                    Сорт:
                    {' '}
                    {sort_tea}
                  </h3>
                  <h4 className="card-text">
                    Место культивации:
                    {' '}
                    {location}
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-4">
              <div className="card-body">
                <h5 className="card-text">{discription}</h5>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="col-md-8 col-sm-4">
              <div className="card-body">
                {newUser
                  ? (
                    <form>
                      <input className="form-control form-control-lg" type="text" name="comment" placeholder="Оставьте свой комментарий! :)" aria-label=".form-control-lg example" />
                      <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-success plus" type="submit">Опубликовать</button>
                      </div>
                    </form>
                  )
                  : console.log('Ты не зареган')}
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3 className="namecom">Комментарии:</h3>
        <div className="comments">
          {role
            ? mas?.map((el, index) => ( // админ
              <div className="card card-width-comment">
                <div className="card-body ">
                  <h4>{el['User.login']}</h4>
                  {el.text}
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end btn-center">
                  <button className="btn me-md-2 del btn-nonVisible" type="button" id={el.id} width="15px" height="20px">
                    <img src="../img/delete.png" alt="..." width="15px" height="20px" className="img-btn" id={el.id} />
                  </button>
                </div>
              </div>
            ))
            : mas?.map((el, index) => ( // юзер и гость
              <div className="card card-width-comment">
                <div className="card-body ">
                  <h4>{el['User.login']}</h4>
                  {el.text}
                </div>
                {el['User.login'] === newUser // юзер
                  ? (
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end btn-center">
                      <button className="btn me-md-2 del btn-nonVisible" type="button" id={el.id} width="15px" height="20px">
                        <img src="../img/delete.png" alt="..." width="15px" height="20px" className="img-btn" id={el.id} />
                      </button>
                    </div>
                  )
                  : console.log('123')}
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};
