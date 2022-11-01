//Фильтрация по диапазону


//Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
//ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.


//Функция должна возвращать новый массив и не изменять исходный.



let someArray = [1, 4, 5, 3, 8, 6];

function filterRange(arr, a, b) {
      for (let i = 0; i < arr.length; i++){
        const element = arr[i];
        if ( a> element || element>b) {
            arr.splice(i,1);
            i--;
        }
      }
}

console.log(someArray); 
filterRange(someArray,1,4);
console.log(someArray); 