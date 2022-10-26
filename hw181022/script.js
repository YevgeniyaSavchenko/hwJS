/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».


    То есть дефисы удаляются, а все слова после них получают заглавную букву.

    Примеры:

    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
    P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.


*/
let str = 'my-short-string';
 let camelize = 'myShortString';
function camelize(str) {
    return str
      .split('-') // разбивает 'my-short-string' на массив ['my', 'short', 'string']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['my', 'short', 'string'] в ['my', 'Short', 'String']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  }