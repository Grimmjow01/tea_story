/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function ShowTea({ oneTea, newUser }) {
  return (
    <Layout newUser={newUser}>
      <div className="show-one-tea">
        <script defer src="/js/deleteTea.js" />
        <div className="flex-div-1">
          <div className="edit card card-body show-one-tea-div-flex">
            <div>
              <img src={oneTea.image_url} alt="image error" width="150px" height="150px" />
            </div>
            <div className="width250">
              <h1>{oneTea.title}</h1>
              <span className="entry-date block font-3-4 c-lt-gray margin5 font-small">
                Written on
                {' '}
                {String(oneTea.createdAt).slice(0, 16)}
              </span>
              <p>{oneTea.sort_tea}</p>
              <div className="btn-show-one-tea-div-flex">
                <a href={`/profile/${oneTea.id}/edit`} className="teaEdit btn btn-success">Редактировать</a>
                <button id="deleteTeaButton" data-onteaid={oneTea.id} name="deleteTeaButton" className="btn btn-success">
                  Удалить
                </button>
              </div>
              {/* <ul id="editAndDeleteUl" className="no-bullets">
            <li className="pipe-separate left">
              <a href={`/profile/${oneTea.id}/edit`} className="teaEdit btn btn-success">Редактировать</a>
            </li>
            <li className="pipe-separate left">
              <button id="deleteTeaButton" data-onteaid={oneTea.id} name="deleteTeaButton" className="btn btn-success">
                Удалить
              </button>
            </li>
          </ul> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
