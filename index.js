// taking code & message in upper case
var code = document.querySelector(".psc").value.toUpperCase();
var msg = document.querySelector(".tstmsg").value.toUpperCase();

// button on click actions
var btn1 = document.querySelectorAll("button")[0].addEventListener("click", encrypt);
var btn2 = document.querySelectorAll("button")[1].addEventListener("click", decrypt);

var code_index = code[0];

//function description
function encrypt() {
    if (code_index === "R") {
       /*
       Right Encryption Code
       */
    }
    else if(code_index==="L"){
        /*
       Left Encryption Code
       */
    }
}

function decrypt() {
    if (code_index === "R") {
        /*
        Left Encryption Code
        */
     }
     else if(code_index==="L"){
         /*
        Right Encryption Code
        */
     }
}
