"use strict";

(function() {
    let firstName = "";
    let lastName = "";
    let nickName = "SuperCoder";

    console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder
    // this can probably be used as a replacement for simple else if ladders 

    // the same thing could be done for the && operator, except && returns the first 
    // true value
})();