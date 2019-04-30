/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-undef
const doc = document;
const output = doc.getElementById('output');
const button = doc.getElementById('btnSum');
const firstInput = doc.getElementById('firstInput');
const secondInput = doc.getElementById('secontInput');
firstInput.value = 0.1;
secondInput.value = 0.2;

function print(message) {
  const item = doc.createElement('p');
  item.innerHTML = message;
  output.appendChild(item);
}

function clearOutput() {
  output.innerHTML = '';
}

button.addEventListener('click', () => {
  const a = Number(firstInput.value);
  const b = Number(secondInput.value);
  let isValid = true;
  clearOutput();
  if (isNaN(a)) {
    print('Не верно введен номер в первое поле!');
    isValid = false;
  }
  if (isNaN(b)) {
    print('Не верно введен номер во второе поле!');
    isValid = false;
  }
  if (isValid) {
    const res = (a * 100000000000000000 + b * 100000000000000000) / 100000000000000000;
    print(res);
  }
})