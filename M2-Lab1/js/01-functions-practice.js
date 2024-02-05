// Function to halve a number
function halfNumber(number) {
    const result = number / 2;
    console.log(`Half of ${number} is ${result}.`);
    return result;
}

// Function to square a number
function squareNumber(number) {
    const result = number ** 2;
    console.log(`The result of squaring the number ${number} is ${result}.`);
    return result;
}

// Function to calculate the percentage
function percentOf(number1, number2) {
    const percentage = (number1 / number2) * 100;
    console.log(`${number1} is ${percentage}% of ${number2}.`);
    return percentage;
}

// Function to find modulus
function findModulus(number1, number2) {
    const modulus = number1 % number2;
    console.log(`${number1} is the modulus of ${number2} and ${number1 + modulus}.`);
    return modulus;
}



