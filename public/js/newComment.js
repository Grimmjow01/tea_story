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
  console.log(result);
  const newComme = document.createElement('div');
  newComme.classList.add('card');
  newComme.innerHTML = `<div class="card-body">
    <h4>${loginN}</h4>
    ${text}
  </div>`;
  allcom.appendChild(newComme);
});

allcom?.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
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
      allcom.removeChild(e.target.parentNode.parentNode);
    }
  }
});
