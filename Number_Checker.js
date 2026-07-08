let numberInput = document.getElementById('numberInput');
let checkButton = document.getElementById('checkButton');
let result = document.getElementById('result');


let NumberChecker = () => {

    let UserInput = numberInput.value;

    if (UserInput == "") {
        result.innerHTML = 'Enter Any Number.';

    } else if (UserInput > 0) {
        result.innerHTML = 'The number is positive.';

    } else if (UserInput == 0) {
        result.innerHTML = 'The number is zero.';

    } else {
        result.innerHTML = 'The number is negative.';
    }
}


checkButton.addEventListener('click', NumberChecker);