const btn = document.querySelector('.plus');
// const nashcomment = document.querySelector('.del');
const allcom = document.querySelector('.comments');
const main = document.querySelector('.Content');
const loginId = document.querySelector('.loginId');
const loginName = document.querySelector('.login');

btn?.addEventListener('click', async (e) => {
  e.preventDefault();
  const inp = document.querySelector('input');
  const text = inp.value;
  if (text !== '') {
    const { id } = main;
    const id1 = loginId.id;
    const loginN = loginName.id;
    const responce = await fetch(`/tea/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        id1,
      }),
    });
    const result = await responce.json();
    const newComme = document.createElement('div');
    newComme.classList.add('card');
    newComme.classList.add('card-width-comment');
    newComme.innerHTML = `<div class="card-body">
    <h4>${loginN}</h4>
    ${text}
  </div>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end btn-center">
    <button class="btn me-md-2 del btn-nonVisible" type="button" id=${result.id}>
      <img src="../img/delete.png" alt="..." width="15px" height="20px" />
    </button>
  </div>`;
    allcom.appendChild(newComme);
  } else {
    console.log('ghfytjgj');
    alert('Пустой комментарий не отправить');
  }
});

allcom?.addEventListener('click', async (e) => {
  console.log('e.target', e.target);
  if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') {
    e.preventDefault();
    const { id } = e.target;
    const response = await fetch('/tea/deleteCom', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    if (response.status === 200 && e.target.tagName === 'BUTTON') {
      allcom.removeChild(e.target.parentNode.parentNode);
    } else if (response.status === 200 && e.target.tagName === 'IMG') {
      allcom.removeChild(e.target.parentNode.parentNode.parentNode);
    }
  }
});
