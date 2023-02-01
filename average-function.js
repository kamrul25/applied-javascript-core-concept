function make_average(numbers){
    let sum = 0;
    let i = 0;
    for(i=0; i< numbers.length; i++){
        sum += numbers[i];
        console.log(numbers[i],sum);
    }
    const average = sum / i;
    return average;
}

const numbers = [ 1, 2, 3, 4, 5, 6, 7,8,9,10];
const averageValue = make_average(numbers);
console.log("This is average value of numbers array ", averageValue);