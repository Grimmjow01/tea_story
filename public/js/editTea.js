/* eslint-disable no-alert */
const editTeaForm = document.querySelector('#editTeaForm');

editTeaForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const location = e.target.location.value;
  const image_url = e.target.image_url.value;
  const discription = e.target.discription.value;
  const sort_tea = e.target.sort_tea.value;

  const obj = {
    title, location, image_url, discription, sort_tea,
  };
  if (title && location && discription && sort_tea) {
    const responce = await fetch(`/profile/${e.target.dataset.teaid}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ obj }),
    });

    if (responce.status === 200) {
      window.location.assign(`/profile/${e.target.dataset.teaid}`);
    }
    if (responce.status === 500) {
      alert('Что-то пошло не так!');
    }
  } else {
    alert('Заполните все необходимые поля');
  }
});
