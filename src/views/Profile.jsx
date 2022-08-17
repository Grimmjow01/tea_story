const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({ teaInforms, teaComments, role, newUser }) {
  return (
    <Layout newUser={newUser}>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />

      <ul>
        {
            role ? (
              <div className="container-xl">
                <a href="/profile/newtea" className="btnAddTea">Добавить чай</a>
                <div>
                  {teaInforms.map((teaInform) => (
                    <li className="tea-item pad-b-4" key={teaInform.id}>
                      <a href={`/profile/${teaInform.id}`} className="tea-title font-2 pad-b-1-4 c-white">{teaInform.title}</a>
                      <p className="tea-date block font-3-4 c-lt-gray">
                        Written on
                        {' '}
                        {String(teaInform.createdAt).slice(0, 16)}
                      </p>
                      <p className="tea-stub">
                        Cорт:
                        {teaInform.sort_tea}
                      </p>
                    </li>
                  ))}
                </div>
              </div>

            )
              : (
                teaComments.map((teaComment) => (
                  <li>
                    {teaComment.text}
                    Written on
                    {' '}
                    {String(teaComment.createdAt).slice(0, 16)}
                  </li>
                ))
              )
          }
      </ul>
    </Layout>
  );
};
