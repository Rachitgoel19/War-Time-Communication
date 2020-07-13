// taking code & message in lower case
var code = document.querySelector(".psc").value.toLowerCase();
var msg = document.querySelector(".tstmsg").value.toLowerCase();

// button on click actions
var btn1 = document.querySelectorAll("button")[0].addEventListener("click", encrypt);
var btn2 = document.querySelectorAll("button")[1].addEventListener("click", decrypt);

var code_index = code[0];
var shift = (code.substr(1, code.length)) % 26;
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var crypt_msg = '';

function encrypt() {
    if (code_index === "R") {

        for (var i = 0; i < msg.length; i++) {
            var letter = msg[i];

            var location = alphabet.search(letter);
            var new_location = ((location) % 26 + (shift) % 26) % 26;
            crypt_msg += alphabet[new_location];
        }
        $(".tstmsg").value = crypt_msg;
    }

    // else if (code_index === "L") {
    //     for (var i = 0; i < msg.length; i++) {
    //         var letter = msg[i];
    //         var index = alphabet.indexOf(letter);
    //         if (index == -1) {
    //             crypt_msg += letter;
    //         }
    //         else {
    //             index = ((index + shift) + 26);
    //             var nextLetter = alphabet[index];
    //             crypt_msg += nextLetter;
    //         }
    //     }
    // }
}

function decrypt() {
    if (code_index === "R") {
        /*
        Left Encryption Code
        */
    }
    else if (code_index === "L") {
        /*
       Right Encryption Code
       */
    }
}
