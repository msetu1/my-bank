// step-1 
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2 
    const inputField = document.getElementById('input-field');
    const email = inputField.value;

    inputField.value = "";

    // step-3 get password
    // set id on the html 
    const inputPassword = document.getElementById('input-password');
    const password = inputPassword.value;

    inputPassword.value = "";
    // step -4 do not use
    if (email === "msetu5763@gmail.com" && password === "24685") {
        console.log("valid");
    }
    else {
        console.log("invalid");
    }
})