/* eslint-disable jsx-a11y/tabindex-no-positive */
const React = require('react');
const Layout = require('./Layout');

module.exports = function NewTea({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <script defer src="/js/newTea.js" />
      {/* <link rel="stylesheet" href="../css/ediTea.css" /> */}
      <section className="home">
        <h1>Добавить</h1>

        <form id="newTeaForm" action="/profile/newtea" method="post">
          Название:
          {' '}
          <input
            id="title-input"
            name="title"
            type="text"
            tabIndex="1"
            className="block w-100 no-outline no-border pad-1 mar-b-2"
          />

          Сорт:
          <textarea
            id="sort-textarea"
            name="sort_tea"
            tabIndex="2"
            className="block w-100 h-10 no-resize no-outline no-border no-resize pad-2 mar-b-2"
          />

          Место культивации:
          <textarea
            id="location-textarea"
            name="location"
            tabIndex="3"
            className="block w-100 h-10 no-resize no-outline no-border no-resize pad-3 mar-b-2"
          />

          Описание:
          <textarea
            id="discription-textarea"
            name="discription"
            tabIndex="4"
            className="block w-100 h-10 no-resize no-outline no-border no-resize pad-4 mar-b-2"
          />

          Изображение:
          <textarea
            id="image-textarea"
            name="image_url"
            tabIndex="5"
            className="block w-100 h-10 no-resize no-outline no-border no-resize pad-5 mar-b-2"
          />

          <button
            type="submit"
            value="Update"
            tabIndex="6"
            className="newTeabutton"
          >
            Отправить

          </button>
        </form>
      </section>
    </Layout>
  );
};
