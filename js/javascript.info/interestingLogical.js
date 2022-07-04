"use strict";

(function() {
    let firstName = "";
    let lastName = "";
    let nickName = "SuperCoder";

    console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder
    // this can probably be used as a replacement for simple else if ladders 

    // the same thing could be done for the && operator, except && returns the first 
    // true value

    console.log(!true); // false
    console.log(!0); // true

    console.log(!!"This will get converted into a boolean type");
    // this is because the first ! will make it false, while the second !
    // will make the boolean into what it really is (which is a true since string isnt
    // empty)

    console.log(!!"");

})();