let bookslist = {
    english : 2,
    mathematics: 2,
    physics: 2,
    chemistry:2,
}

console.log(bookslist);
 bookslist.gk = 2;
console.log(bookslist);



let book = 'english';
let bookValue = bookslist[book];
console.log(book, bookValue);


// set property values
bookslist.mathematics = 4;
console.log(bookslist);
bookslist['mathematics']=10;
console.log(bookslist);

let bookName = 'mathematics';
bookslist[bookName] = 20;
console.log(bookslist);

// object method

console.log('Hello Object!!!!!!!!!!!!');
const fulObject = Object(bookslist);
console.log(fulObject); 

const objectKeysOnAnArray = Object.keys(bookslist);
console.log(objectKeysOnAnArray);

const objectValuesOnAnArray = Object.values(bookslist);
console.log(objectValuesOnAnArray);