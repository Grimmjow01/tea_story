const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({
  teaInforms, teaComments, role, newUser,
}) {
  return (
    <Layout newUser={newUser}>
      {/* <div className="add-new-tea"> */}
      <ul>
        {
            role ? (
              <div className="container-xl">
                <br />
                <a href="/profile/newtea" className="btnAddTea btn btn-success">Добавить чай</a>
                <br />
                <br />
                <div>
                  {teaInforms.map((teaInform) => (
                    <div className="card card-flex">
                      <div className="card-body" key={teaInform.id}>
                        {/* <li className="tea-item pad-b-4" key={teaInform.id}> */}
                        <a href={`/profile/${teaInform.id}`} className="tea-title font-2 pad-b-1-4 c-white a-style font-big">{teaInform.title}</a>
                        <p className="tea-date block font-3-4 c-lt-gray margin5 font-small">
                          Written on
                          {' '}
                          {String(teaInform.createdAt).slice(0, 16)}
                        </p>
                        <p className="tea-stub ">
                          {teaInform.sort_tea}
                        </p>
                        {/* </li> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            )
              : (
                teaComments.map((teaComment) => (
                  <div className="container-xl">
                    <div className="card card-flex">
                      <div className="card-body ">
                        <a href={`/tea/${teaComment.tea_id}`} className="font-2 pad-b-1-4 c-white a-style font-big">{teaInforms[teaComment.tea_id - 1].title}</a>
                        {/* <li> */}
                        <p>{teaComment.text}</p>
                        <p className="tea-date block font-3-4 c-lt-gray margin5 font-small">
                          Written on
                          {' '}
                          {String(teaComment.createdAt).slice(0, 16)}
                        </p>
                        {/* </li> */}
                      </div>
                    </div>
                  </div>

                ))
              )
          }
      </ul>
      {/* </div> */}
    </Layout>
  );
};
