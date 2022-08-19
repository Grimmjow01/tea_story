const newTeaForm = document.querySelector('#newTeaForm');

newTeaForm.addEventListener('submit', async (e) => {
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
    const responce = await fetch('/profile/newtea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    const responceJson = await responce.json();
    window.location.assign(`/profile/${responceJson.newTea.id}`);
  } else {
    alert('Заполните все необходимые поля');
  }
});
