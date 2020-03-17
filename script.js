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
    return n ? n * factorial(n-1) : 1;
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
      let value = prompt("Enter a number", 0);
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
    let sorted = true;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i+1]) {
            sorted = false;
            alert('False');
            break;
        }
    }
    if (sorted == true) {
        alert('True');
    }
}


function isPrime(event) {
    event.preventDefault();
    const h1 = document.getElementById("el");

    if (document.form1.numFib.value > 0) {
        h1.innerText = ' ' + '= ' + prime(document.form1.isPrime.value);
        return true;
    } else {
        alert("Enter exactly a natural number");
        h1.innerText = 'Invalid value entered';
        return false;
    }
    let j = document.form1.isPrime.value % 2;
    if (document.form1.isPrime.value == 0) {
        h1.innerText = 'True';
    } else {
        h1.innerText = 'False';
    }
}


/*  let n = [];
    while (true) {
        let value = promt("Enter a number", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        n.push(+value);
    }
    nextPrime:
    for (let i = 0; i <= document.form1.isPrime.value; i++) {
        for (let j = 2; j <= i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        alert();
    }
}

function prime(k) {
    return k;
}

*/
