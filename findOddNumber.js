
let sum = 0;
// function getOddOfAnArray(numbers){
//     for(let i = 0; i < numbers.length; i++){
//        const index = i;
//        const element = numbers[index];
//         sum = sum + element;
//        console.log(index, element , sum);
//     }
//     return sum;
// }


function getOddOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){
            sum = sum + element;
            console.log(index, element, sum);
        }
    }
    return sum;
}


// even numbers 
function getEvenOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 0){
            sum = sum + element;
            console.log(index, element , sum);
        }
    }
    return sum;
}
const numbers = [12, 65,38, 45, 78, 45, 99, 30];
// const myNumbers = getOddOfAnArray(numbers);
const myNumbers = getEvenOfAnArray(numbers);
console.log( 'Summation of this array: ',myNumbers);