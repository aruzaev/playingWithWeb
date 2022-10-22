'use strict';

/*
function invalidDestination() {
    alert(`Invalid destination entry. Please contact an administratior to fix
    this issue.`);
}

function flightDistance(departureTime, arrivalTime) {
    let message = `Departing at: ${departureTime} | Arriving at: ${arrivalTime}`
    alert(message);
}

function flightPath(departure, arrival = invalidDestination()) {
    if (arrival) {
        let message = `Currently travelling from ${departure} to ${arrival}`;
        alert(message);

        return true;
    }
    return false;

}


if (flightPath("San Antonio", "Toronto")) {
    flightDistance("5:00" , "14:35");
}
else {
    alert("Unable to calculate flight distance.");
};

*/
/*
function ask(question, yes, no) {
    if(confirm(question)) {
        yes()
    }
    else {
        no();
    }
}

ask("Do you agree?",
     function() { alert("You agreed"); }, function() { alert("You cancelled"); }
    );


let helloLoop = function() {
    console.log("Hello bitch")
};

alert(helloLoop);


function checkAge(age) {
    return(age > 18 ? true : confirm("Did your parents allow you?"));
}

let age = prompt("Enter your age: ", '');
if (checkAge(age)) {
    alert("You have been permitted");
}
else {
    alert("N0");
}
*/

/*
let min = (a, b) => a < b ? a : b;

function min(a, b) {
    return a < b ? a : b;
}

alert(min(6, 5));
*/

/*
let x = prompt("Enter the x value: ", '');
let n = prompt("Enter the n value: ", '');

function pow(x, n){
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}


if (n < 1) {
    alert(`Power: ${n} is not supported, use a positive integer`);
} else {
    alert(pow(x, n));
}

*/
/*
let ask = (question, yes, no) => {
    if (confirm(question))
        yes();
    else
        no();
};

//function showOk() {
//    alert("You agreed.");
//}

//function showCancel() {
//    alert("You canceled the execution.");
//}

//ask("Do you agree?", showOk, showCancel);

// or

ask(
    "Do you agree?",
    function() {
        alert("You agreed you fucking sheep!");
    },

    function() {
        alert("You disagreed you fucking sheep!");;
    }
);
*/

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
    'Do you agree?',
    () => {
      alert('You agreed.');
    },
    () => {
      alert('You canceled the execution');
    },
);

