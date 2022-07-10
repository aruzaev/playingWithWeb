"use strict";


 /*   let sum = 0;

    while (true) {
        let value = +prompt("Enter a number", '');

        if (!value) break;

        sum = value + sum;
    }

    alert(`Sum: ${sum}`);

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue; // skips every iteration where i is an even number
    alert(i);
}


for (let i = 2; i <= 10; i++) {
    
    if (i % 2 == 0) console.log(i);
}
*/

let userInput = +prompt("Enter a number greater than 100", '');

while (userInput <= 100 || !userInput) {
    userInput = +prompt("Error, try again:", '');
} 