"use strict";

(function() {
/*    let firstName = "";
    let lastName = "";
    let nickName = "SuperCoder";

    console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder
    // this can probably be used as a replacement for simple else if ladders 

    // the same thing could be done for the && operator, except && returns the first 
    // true value

    
    // && returns the first false value:
    console.log(1 && null && 2); // 1 true, null false so output is null

    console.log(!truse); // false
    console.log(!0); // true

    console.log(!!"This will get converted into a boolean type");
    // this is because the first ! will make it false, while the second !
    // will make the boolean into what it really is (which is a true since string isnt
    // empty)

    console.log(!!""); // false 

    let age = 12;

    if (age >= 14 && age <= 90) {
        console.log("You are still young");
    }
    
    if (age < 14 || age > 90) {
        console.log("Bruhhhhhh aint no wayyyyyy skull");
    }

    if (!(age >= 14 && age <= 90)) {
        console.log("Bruh");
    }
    */

    const usernameInput = prompt("Username: ", '');
    let passwordInput;
    
    if (usernameInput === "Admin") {
        passwordInput = prompt("Password: ", '');

        if (passwordInput != '') {
            if (passwordInput === "TheMaster") {
                alert("Welcome!");
            }
            else if (passwordInput !== "TheMaster") {
                alert("Wrong password");
            }
        }
        else {
            alert("Canceled");
        }
    } else {
        alert("Invalid username:")
    }
})();