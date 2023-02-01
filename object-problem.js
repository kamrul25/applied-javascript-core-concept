let pizza = {
  toppings: ["cheese", "sauce", "pepperoni"],
  crust: "deep dish",
  serves: 2,
};
console.log(pizza);
console.log(pizza.toppings[0]);



// complex way . ***Very complex.
const keys = Object.keys(pizza);
console.log(keys);
for(let i = 0 ; i < keys.length; i++){
    if(i == 0){
        const propertyName = keys[i];
        console.log(propertyName);
        const values = pizza.toppings;
        console.log(values);
        for(let i = 0; i< values.length; i++){
            console.log(i, values[i]);
            if( i === 2){
                console.log(values[i])
            }
        }
    }
}