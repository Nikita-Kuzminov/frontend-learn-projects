// document.addEventListener('DOMContentLoaded', (event) =>
//     checkData()
// )


/**
 * Метод получает форму с name = form1 и вложенный в нее элемент с name = treeChar
 * Так как в нашем случает элемент с name = treeChar - это input, то мы получаем его value (то значение,
 * которое пользователь вводит в поле ввода) и проверяем длинну данного value
 * 
 * Метод вызывается по кнопке 'Check input length', а не в момент загрузки dom-контента, так как
 * с начала нам необходимо ввести какое-то значение в поле вводы
 */
function checkData(event) {

    // Вызов данной функции необходим чтобы предотвратить стандартную перезгразку страницы
    // Можно закоменитровать и посмотреть, что будет происходить
    event.preventDefault();

    const h1 = document.getElementById("el");

    if (document.form1.threeChar.value.length == 3) {
        console.log('Введенное значение корректно');
        h1.innerText = 'Введенное значение корректно';
        return true;
    } else {
        alert("Enter exactly three characters. " + document.form1.threeChar.value + " is not valid.");
        console.log('Введенное значение некорректно')
        h1.innerText = 'Введенное значение корректно';
        return false;
    }
}