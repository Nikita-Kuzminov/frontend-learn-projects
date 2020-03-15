document.addEventListener('DOMContentLoaded', (event) => {
    
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

});
