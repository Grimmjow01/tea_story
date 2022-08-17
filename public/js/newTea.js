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

  const responce = await fetch('/profile/newtea', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ obj }),
  });

  const responceJson = await responce.json();

  if (responceJson.teaEditingSuccessful) {
    const addDiv = document.createElement('div');
    addDiv.classList.add('add');
    addDiv.innerText = 'Отправлено';
    e.target.parentElement.append(addDiv);
    // window.location = `/profile/${e.target.dataset.teaid}`;
  } else {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    errorDiv.innerText = responceJson.errorMessage;
    e.target.parentElement.append(errorDiv);
  }
});
