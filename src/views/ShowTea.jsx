/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function ShowTea({ oneTea, newUser }) {
  return (
    <Layout newUser={newUser}>
      <script defer src="/js/deleteTea.js"/>
      <div className="edit">
      <h1>{oneTea.title}</h1>
      <span className="entry-date block font-3-4 c-lt-gray">
        Written on
        {' '}
        {String(oneTea.createdAt).slice(0, 16)}
      </span>
      <p>{oneTea.sort_tea}</p>
      <ul id="editAndDeleteUl" className="no-bullets">
        <li className="pipe-separate left">
          <a href={`/profile/${oneTea.id}/edit`} className="teaEdit">Редактировать</a>
        </li>
        <li className="pipe-separate left">
          <button id="deleteTeaButton" data-onteaid={oneTea.id} name="deleteTeaButton">
            Удалить
          </button>
        </li>
        <img src={oneTea.image_url} alt="image error" />
      </ul>
      </div>
    </Layout>
  );
};
