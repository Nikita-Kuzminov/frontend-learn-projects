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

function isPrime(e) {                                             //объявили функцию, которая возвращает значение переменной e
    e.preventDefault();                                           //сделали так, чтобы страница каждый раз возвращалась в исходное
                                                                  //положение после нажатия на любую из кнопок. Чтобы страница не 
                                                                  //оставалась в подвешенном состоянии, а продолжала функционировать
    const h1 = document.getElementById("el");                     //объявили переменную h1, передав в неё значение с html-файла из body  

    if (document.form1.primeNumber.value > 0) {                   //если введённое значение больше нуля
        const value = Number(document.form1.primeNumber.value);   // присваиваем новой переменной value введённое значение
        const isPrime = isPrimeCheck(value);                      //создаём ещё переменную, которой присваиваем значение, 
                                                                  //возвращённое из функции isPrimeCheck

        if (isPrime) {                                            //функция обращается к самой себе (в случае выполнения функции)
            h1.innerText = 'The number is prime';                 //нужно вывести на экран текст 'The number is prime'
        } else h1.innerText = 'The number is not prime';          //Если нет - выводим альтернативный текст 'The number is not prime'

    } else {
        alert("Enter number > 0");                                //если изначально введённое значение меньше нуля, то сайт выдаёт
                                                                  //сообщение "Enter number > 0"
        h1.innerText = 'Invalid value entered';                   //а на самой страничке выводится запись: 'Invalid value entered'
    }
}


function isPrimeCheck(num) {                                      //новая функция, возвращающая значение переменноц num
    for(var i = 2; i < num; i++)                                  //создаём новую переменную i, равную двум; возвращаться в цикл, 
                                                                  //пока i не станет равным num; i увеличивать с каждой итерацией на 1
      if(num % i === 0) return false;                             //если результат деления без остатка num на i будет равен нулю,
                                                                  //функция возвращает значение false
    return num > 1;                                               //если не равен нулю, функция возвращает переменную num > 1 
  }