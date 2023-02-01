function isLeapYear ( year){
    const remainder = year % 4;
    if( remainder === 0){
        return true;
    }
    return false ;
} 
const isMyLeapYear = isLeapYear(2024);
console.log(isMyLeapYear);


