function encrypt() {
    var code = document.getElementById("psc").value;
    var msg = document.getElementById("tstmsg").value;

    var code_index = code[0];
    var shift = (code.substr(1, code.length)) % 26;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var alphabet2 = "zyxwvutsrqponmlkjihgfedcba"

    var crypt_msg = '';

    console.log(code);
    if (code_index === "r") {
        console.log("R-Success");
        for (var i = 0; i < msg.length; i++) {
            var letter = msg[i];

            var location = alphabet.search(letter);
            var new_location = ((location) % 26 + (shift) % 26) % 26;
            crypt_msg += alphabet[new_location];
        }
        document.getElementById('tstmsg').value = crypt_msg;
        console.log("Encrypted version: " + crypt_msg);
    }

    else if (code_index === "l") {
        console.log("L-Success");
        for (var i = 0; i < msg.length; i++) {
            var letter = msg[i];

            var location = alphabet2.search(letter);
            var new_location = ((location) % 26 + (shift) % 26) % 26;
            crypt_msg += alphabet2[new_location];
        }
        document.getElementById('tstmsg').value = crypt_msg;
        console.log("Encrypted version: " + crypt_msg);
    }
}

function decrypt() {
    var code = document.getElementById("psc").value;
    var msg = document.getElementById("tstmsg").value;

    var code_index = code[0];
    var shift = (code.substr(1, code.length)) % 26;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var alphabet2 = "zyxwvutsrqponmlkjihgfedcba"

    var crypt_msg = '';

    console.log(code);
    if (code_index === "r") {
        console.log("R-Success");
        for (var i = 0; i < msg.length; i++) {
            var letter = msg[i];

            var location = alphabet2.search(letter);
            var new_location = ((location) % 26 + (shift) % 26) % 26;
            crypt_msg += alphabet2[new_location];
        }
        document.getElementById('tstmsg').value = crypt_msg;
        console.log("Encrypted version: " + crypt_msg);
    }

    else if (code_index === "l") {
        console.log("L-Success");
        for (var i = 0; i < msg.length; i++) {
            var letter = msg[i];

            var location = alphabet.search(letter);
            var new_location = ((location) % 26 + (shift) % 26) % 26;
            crypt_msg += alphabet[new_location];
        }
        document.getElementById('tstmsg').value = crypt_msg;
        console.log("Encrypted version: " + crypt_msg);
    }
    // if (code_index === "R") {
    //     /*
    //     Left Encryption Code
    //     */
    // }
    // else if (code_index === "L") {
    //     /*
    //    Right Encryption Code
    //    */
    // }
}
