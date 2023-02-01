 let aboutMe = {
    name: 'Kamrul Hasan Jaman',
    age : 18,
    color: 'dark-white',
    height: 5.2,
    weight: 70 
 }

//  console.log(aboutMe);

//  aboutMe.dream = "Web Developer";
//  console.log(aboutMe.age);


 var myComputer = {
    brand: 'Dell',
    price: 40000,
    processor: 'i3',

 }
//  console.log(myComputer.brand);
//  console.log(myComputer);

//  myComputer.color = 'Black';
//  console.log(myComputer.color);
//  console.log(myComputer);

var shoppingCart = {
    book: 3,
    sunGlass : 1,
    keyboard: 5,
    pen: 25
}
// console.log(shoppingCart);

// when i know  the specific property name , use dot notation to access property value
var penCount1 =shoppingCart.pen ;
// console.log(penCount1);

// alternative way
// when i know  the specific property name , use dot notation to access property value
var penCount2 = shoppingCart['pen'];
// console.log(penCount2);


// ** When I don't know specific property name , I use this object method to get the objects , keys / property and values .
var properties = Object(shoppingCart);
console.log(properties);

var propertyKeys = Object.keys(shoppingCart);
console.log(propertyKeys);

var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);


