/* Напишите следующую функцию, которая принимает некий массив данных. 
если в массиве только строковый тип данных, то функция должна находить самую длинную строку и возвращать массив из двух элементов - эту строку и её индекс исходном массиве 

если в массиве только цифры, то функция должна находить самую большую цифру и возвращать массив из двух элементов - из этой цифры и её индекса в исходном массиве

во всех остальных случаях (если там другие типы данных или же они смешаны), то функция должна возвращать массив из двух элементов - первый это строка 'неверный тип данных в массиве', а второй элемент это общая длина массива.*/
let array1 = ["gftr", "ffffff", "hhhhhhh"];
let array2 = [12, 3, 58, 9, -6];
let array3 = [true, false];

let newValueMassiv1 = (arr) => {
  if (checkTypeInArray(arr, "string")) {
    return findMaxStringInArray(arr);
  }
  if (checkTypeInArray(arr, "number")) {
    return findMaxNumberInArray(arr);
  }

  return ["Error Data", arr.length];
};
console.log(newValueMassiv1(array1));
console.log(newValueMassiv1(array2));
console.log(newValueMassiv1(array3));

function checkTypeInArray(array, type) {
  let flag = true;
  array.forEach((element) => {
    if (typeof element !== type) {
      flag = false;
    }
  });
  return flag;
}
разобрали на уроке 