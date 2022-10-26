
  //Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».



let camelize = (str) => {
    let arr =[];
    let newStr = '';

    arr = str.split('-');

    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].slice(0,1).toUpperCase()+arr[i].slice(1);
    };

    newStr = arr.join('');

    return newStr;
}

let str = 'my-short-string';

console.log(camelize(str));
