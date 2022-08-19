/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/tabindex-no-positive */
const React = require('react');
const Layout = require('./Layout');

module.exports = function EditTea({ oneTea, newUser }) {
  return (
    <Layout newUser={newUser}>
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" /> */}
      <script defer src="/js/editTea.js" />

      <div className="add-new-tea">
        <h1 className="margin10">Редактировать</h1>
        <br />

        <form id="editTeaForm" method="PATCH" data-teaid={oneTea.id}>
          <div className="form-floating mb-3">
            Название:
            <input
              id="title-input"
              name="title"
              type="text"
              defaultValue={oneTea.title}
              tabIndex="1"
              className="block w-100 no-outline no-border pad-1 mar-b-2 form-control form-control-lg new-tea-form"
            />
          {/* </div>
          <div className="form-floating mb-3"> */}
            Сорт:
            <textarea
              id="sort-textarea"
              name="sort_tea"
              tabIndex="2"
              className="block w-100 no-outline no-border pad-2 mar-b-2 form-control form-control-lg new-tea-form"
              defaultValue={oneTea.sort_tea}
            />

            Место культивации:
            <textarea
              id="location-textarea"
              name="location"
              tabIndex="3"
              className="block w-100 no-outline no-border pad-3 mar-b-2 form-control form-control-lg new-tea-form"
              defaultValue={oneTea.location}
            />

            Описание:
            <textarea
              id="discription-textarea"
              name="discription"
              tabIndex="4"
              className="block w-100 no-outline no-border pad-4 mar-b-2 form-control form-control-lg new-tea-form"
              defaultValue={oneTea.discription}
            />

            Изображение:
            <textarea
              id="image-textarea"
              name="image_url"
              tabIndex="5"
              className="block w-100 no-outline no-border pad-5 mar-b-2 form-control form-control-lg new-tea-form"
              defaultValue={oneTea.image_url}
            />

            <button
              type="submit"
              value="Update"
              tabIndex="6"
              className="btn btn-success"
            >
              Отправить

            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
