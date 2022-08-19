const deleteTeaButton = document.querySelector('#deleteTeaButton');
console.log(deleteTeaButton)
deleteTeaButton.addEventListener('click', async (e) => {
  const response = await fetch(`/profile/${e.target.dataset.onteaid}`, {
    method: 'DELETE',
  });

  const responseJson = await response.json();

  if (!responseJson.isDeleteSuccessful) {
    const errorLi = document.createElement('li');
    errorLi.classList.add('pipe-separate');
    errorLi.classList.add('left');
    errorLi.classList.add('error');
    errorLi.innerText = responseJson.errorMessage;
    const editAndDeleteUl = document.querySelector('#editAndDeleteUl');
    editAndDeleteUl.append(errorLi);
  } else {
    window.location = '/profile';
  }
});
