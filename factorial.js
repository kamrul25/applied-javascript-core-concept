// function factorial(number){
//     let result = 1;
//     for(let i = 1; i <= number; i++){
//         result = result * i;
//         // console.log(i, result );
//     }
//     return result;
// }


function reverseFactorial(number){
    let result = 1;
    let i = number;
    while (i>= 1) {
        result *= i;
        i--;
    }
    return result;
}
const number = 10;
// const fact = factorial(number);
// console.log('Factorial of 10 :', fact);

const reverseFact = reverseFactorial(number);
console.log(reverseFact);