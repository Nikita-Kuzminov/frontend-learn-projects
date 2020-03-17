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
    fib(m);
    if (document.form1.numFib.value > 0) {
        console.log('Helolo');
        h1.innerText = 'The number from sequence of fibonacci numbers ' + '= ' + fib(document.form1.numFib.value);
        return true;
    } else {
        alert("Enter exactly a natural number");
        h1.innerText = 'Invalid value entered';
        return false;
    }
}

function fib(m) {
    let arr = [];
    
    arr[0] = 0;
    arr[1] = 1;
    arr[m] = arr[m-1] + arr[m-2];
    return m = arr[m];
}

