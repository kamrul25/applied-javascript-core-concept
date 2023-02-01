// findLeapYear form this years array by using function

function findLeapYear(years){
    for(let  i = 0; i < years.length; i++){
        const index = i;
        const element = years[index];
        if (  element % 4 === 0 ) {
            console.log('This is a Leap Year ', i, element);
        }
    }
}


const years = [ 2023, 2024, 2025, 2028, 2030];
findLeapYear(years);