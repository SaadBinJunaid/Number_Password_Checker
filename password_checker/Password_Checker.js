let passwordInput = document.getElementById('passwordInput');
let checkButton = document.getElementById('checkButton');
let result = document.getElementById('result');


let PasswordChecker = () => {
    let UserInput = passwordInput.value;

    if (UserInput == "") {
        result.innerHTML = 'Enter a password.';

    } else if (UserInput === 'admin123') {
        result.innerHTML = 'Login Successful.';
    }
    else {
        result.innerHTML = 'Incorrect Password.';
    }
}

checkButton.addEventListener('click', PasswordChecker);