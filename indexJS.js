/*document.addEventListener('DOMContentLoaded', (event) => {
    
    const h1 = document.getElementById("el");
    if (h1 === undefined) {
        console.log('Hi');
        h1.innerText = 'Hi';
    } else {
        for (let i = 0; i < 9; i++) {
        console.log('Buy');
        h1.innerText = h1.innerText +'Buy\n';
        }
    }

});*/
document.addEventListener('DOMContentLoaded', (event) =>

function checkData() {
    if (document.form1.threeChar.value.length == 3) {
        console.log('True');
        h1.innerText = ('True');
        return true;
    } else {
        alert("Enter exactly three characters. " + document.form1.threeChar.value + " is not valid.");
        console.log('False')
        h1.innerText = ('False');
        return false;
    }
})
