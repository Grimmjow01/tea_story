const btn = document.querySelector('.plus');
const nashcomment = document.querySelector('.comments');
const main = document.querySelector('.Content');
const loginId = document.querySelector('.loginId');
const loginName = document.querySelector('.login');

btn?.addEventListener('click', async (e) => {
  e.preventDefault();
  const inp = document.querySelector('input');
  const text = inp.value;
  const { id } = main;
  const id1 = loginId.id;
  const loginN = loginName.id;
  console.log(loginId);
  console.log(id1);
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
  console.log(result);
  const newComme = document.createElement('div');
  newComme.classList.add('card');
  newComme.innerHTML = `<div class="card-body">
    <h4>${loginN}</h4>
    ${text}
  </div>`;
  nashcomment.appendChild(newComme);
});

nashcomment.addEventListener('click', async (e) => {
  e.preventDefault();
  const { id } = e.target;
  console.log(id);
  const response = await fetch('/tea/deleteCom', {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  if (response.status === 200) {
    nashcomment.removeChild(e.target.parentNode.parentNode);
  }
});