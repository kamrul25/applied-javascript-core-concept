// even number checking  by function 
function evenOrOddNumberChecking(number){
    if (number % 2 == 0) {
        for(let i = 0 ; i <= number; i += 2){
            console.log(i);
        }
        return 'Hurray! This is an even number .';
    }
    else{
        for (let i = 1; i <= number; i += 2) {
          console.log(i);
        }
        return 'Hurray! This is an odd number.'
    }
}

const number = 10 ;
const numberChecking = evenOrOddNumberChecking(number);
console.log(numberChecking)