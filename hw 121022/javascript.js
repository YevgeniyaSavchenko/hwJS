/*Напишите функцию, которая будет проверять тип данных (typeof someValue) и если
это будет строка, то проверять сколько в ней символов, возвращать (return) результат (количество символов в строке - число).


Количество символов в строке можно узнать применив к строке свойство length через точку. Например выражение 'Hello'.length вернет число 5, если вы вызовите его через консоль, аналогично и для переменной, которая содержит строку. Например:


let someString = 'Hello';
console.log(someString.length) // 5


если это значение присланное в функцию будет число, то его нужно переводить в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованной из числа строке.


если это значение присланное в функцию будет boolean - true или false, то его нужно переводить в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованном из boolean значения строке.


если тип данных не строка и не число и не boolean, то функция должена вернуть строку  'неверный тип данных'*/



let reply = (number) =>  console.log(`how many characters =  ${number.length}`);

let typeValue = someValue => {

    if(typeof(someValue)=='string'){
        return reply(someValue);
    }
    if(typeof(someValue)=='number' || typeof(someValue)=='boolean' ){
        return reply(String(someValue));
    };

    return console.log('неверный тип данных')

}

typeValue('Hello');
typeValue(1234);
typeValue(true);
typeValue(false);
typeValue(undefined);
typeValue(null);


