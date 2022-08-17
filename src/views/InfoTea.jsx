const e = require('express');
const React = require('react');
const Layout = require('./Layout');

module.exports = function InfoTea(newInfo) {
  const {
    id, title, location, image_url, discription, sort_tea,
  } = newInfo.onlyInfo;
  const mas = newInfo.comments;
  const activUser = newInfo.newUser;
  const { role } = newInfo;
  // console.log('Смотри сюда=> ');
  // console.log('Смотри сюда=> ', mas);
  return (
    <Layout>
      <link rel="stylesheet" href="../css/info.css" />
      <script defer src="../js/newComment.js" />
      <div className="container-xl Content" id={id}>
        <div className="card mb-3 loginId" id={activUser.id} max-width="540px;">
          <div className="row g-0 login" id={activUser.login}>
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
                <h5 className="card-text">{discription}</h5>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                {activUser
                  ? (
                    <form>
                      <input className="form-control form-control-lg" type="text" name="comment" placeholder="Оставьте свой комментарий! :)" aria-label=".form-control-lg example" />
                      <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary me-md-2 plus" type="submit">Оставить комментарий</button>
                      </div>
                    </form>
                  )
                  : console.log('Ты не зареган')}

              </div>
            </div>
          </div>
        </div>
        <h3 className="namecom">Комментарии о чае:</h3>
        <div className="comments">
          {console.log(activUser)}
          {role
            ? mas?.map((el, index) => (
              <div className="card">
                <div className="card-body">
                  <h4>{el['User.login']}</h4>
                  {el.text}
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn btn-danger me-md-2 del" type="button" id={el.id} />
                </div>
              </div>
            ))
            : mas?.map((el, index) => (
              <div className="card">
                <div className="card-body">
                  <h4>{el['User.login']}</h4>
                  {el.text}
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};
