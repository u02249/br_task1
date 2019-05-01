/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-nnundef
const doc = document; // для того чтобы линтер не ругался на то что переменная не определена
// получим все элементы на странице
const output = doc.getElementById('output');
const button = doc.getElementById('btnSum');
const firstInput = doc.getElementById('firstInput');
const secondInput = doc.getElementById('secontInput');
firstInput.value = 0.1;
secondInput.value = 0.2;

// функция приводит строкове представление числа к нужному форматы
// обрезает 0
function trimZero(num) {
  const removeLastZero = chars => {
    const lastChar = chars[chars.length - 1];
    if (lastChar !== '0') {
      return chars;
    }
    chars.pop();
    return removeLastZero(chars);
  }
  const chars = [...num.toString()]
  return removeLastZero(chars).join('');
}
// выводит сообщение в блок output 
function print(message) {
  const item = doc.createElement('p');
  item.innerHTML = message;
  output.appendChild(item);
}

// отчищает выведенные ранее сообщения
function clearOutput() {
  output.innerHTML = '';
}

// событие обработки клика по кнопке "сложить"
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
  // если значения введены корректно
  // делаем расчет суммы, обрезаем до "безопасного" значения и приводим нужному формату
  if (isValid) {
    const res = (a + b).toFixed(16);
    print(trimZero(res));
  }
})