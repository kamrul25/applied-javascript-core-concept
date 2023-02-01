// adding string 
function addingString (name1 , name2){
    const fulName = name1 +' '+ name2 ;
   return fulName;
}

const name1 = 'Nazmul';
const name2 = 'Hasan';
const fulName = addingString(name1 , name2);
console.log(fulName);


// square function
function square(a){
    const result = a*a;
    return result;
}
const value = 6;
const makeSquare = square(value);
console.log('Square of value : ',makeSquare);