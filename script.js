// document.addEventListener('DOMContentLoaded', (event) =>
//     checkData()
// )


/**
 * Метод получает форму с name = form1 и вложенный в нее элемент с name = treeChar
 * Так как в нашем случает элемент с name = treeChar - это input, то мы получаем его value (то значение,
 * которое пользователь вводит в поле ввода) и проверяем длинну данного value
 * 
 * Метод вызывается по кнопке 'Check input length', а не в момент загрузки dom-контента, так как
 * с начала нам необходимо ввести какое-то значение в поле    
 *  // Вызов данной функции необходим чтобы предотвратить стандартную перезгразку страницы
 *     // Можно закоменитровать и посмотреть, что будет происходить
 */
function checkData(event) {

    event.preventDefault();

    const h1 = document.getElementById("el");

    if (document.form1.threeChar.value != 0) {
        h1.innerText = 'The factorial of ' + document.form1.threeChar.value + " = " + (factorial(document.form1.threeChar.value));
        return true;
    } else {
        alert("Enter exactly a natural number. " + document.form1.threeChar.value + " is not valid.");
        h1.innerText = 'Invalid value entered';
        return false;
    }
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function fibNum(event) {
    event.preventDefault();
    const h1 = document.getElementById("el");
    if (document.form1.numFib.value > 0) {
        h1.innerText = 'The number from sequence of fibonacci numbers ' + '= ' + fib(document.form1.numFib.value);
        return true;
    } else {
        alert("Enter exactly a natural number");
        h1.innerText = 'Invalid value entered';
        return false;
    }
}

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function isSorted(event) {
    event.preventDefault();
    const h1 = document.getElementById("el");
    let numbers = [];

    while (true) {

        let value = prompt("Введите число", 0);

        // Прекращаем ввод?
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sorted = true;

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            sorted = false;
            alert('False');
            break;
        }
    }
    if (sorted == true) {
        alert('True');
    }
}

function fittArr(value) {
    return value > 3;
}

function filtStrings(value) {
    return value === "test";
}

function filter(event) {
    event.preventDefault();
    const h1 = document.getElementById("el");
    let arr1 = [1, 2, 3, 4, 5];
    let arrStrings = ["34", "sdfsfd", "test"];
    filtered(arr1, fittArr);
    filtered(arrStrings, filtStrings);

}

function filtered(array, filteredFun) {
    console.log("Original array " + array);
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!filteredFun(array[i])) {
            filteredArray.push(array[i]);
        }
    }

    console.log("Filtered array " + filteredArray);
    return filteredArray;
}


