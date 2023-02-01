var shoppingCart = {
    book: 3,
    sunGlass : 1,
    keyboard: 5,
    pen: 25,
    show: 2
}

const keys = Object.keys(shoppingCart);
const value = Object.values(shoppingCart);
// access object  by using looping
for(var i = 0 ; i < keys.length; i++ ){
    const propertyName = keys[i];
    const propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}

// object => array
const objectToArray = Object.entries(shoppingCart);
console.log(objectToArray);