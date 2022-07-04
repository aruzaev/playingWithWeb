"use strict";

(function() {
    let firstName = "";
    let lastName = "";
    let nickName = "SuperCoder";

    console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder
    // this can probably be used as a replacement for simple else if ladders 
})();