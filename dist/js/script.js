const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

let country = ["RU", "GB", "SW", "FR", "KZ"];

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.innerHTML = `<p class="form-country">${country[i]}</p> <img src="/img/flag.png" alt="Страна Россия"></img>`;
    selectSingle.setAttribute('data-state', '');
  });
}
