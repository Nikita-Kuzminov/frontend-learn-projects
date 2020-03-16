document.addEventListener('DOMContentLoaded', (event) =>
    checkData()
)

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
}