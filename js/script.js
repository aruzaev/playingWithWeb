"use strict";

(function() {
    let name = prompt("What is your name?");
    let confirmUserName = confirm(`Ah, so you're ${name}?`);

    if (confirmUserName) {
        alert(`Nice to meet you ${name}!`);
    }
    else {
        alert("Stop messing with me, you hooligan. Get the fuck out now!!");
    }
})();


