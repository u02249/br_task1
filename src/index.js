/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-undef
const doc = document;
const btn = doc.getElementById('btnSum');
btn.disabled = true;
const form = doc.querySelector('form');
const firstInput = doc.getElementById('firstInput');
const secontInput = doc.getElementById('secontInput');
const errorStar = doc.createElement('span');
errorStar.innerHTML = '*';

function onInputValue(event) {
  const val = event.target.value;
  if (isNaN(val)) {
    form.insertBefore(errorStar, event.target);
  }
}

firstInput.addEventListener('input', onInputValue);
secontInput.addEventListener('input', onInputValue);
