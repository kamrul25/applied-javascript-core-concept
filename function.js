function name(a, b, c) {
    console.log(a, b, c);
    var sum = a + b + c;
    return  sum;
}

var total = name(10, 20,20);
console.log('Total :' , total);



// console.log(name(10, 20,20));


function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
  }
  
  const assignment1Mark = 60;
  const assignment2Mark = 58;
  const assignment3Mark = 60;
  
  var myAverage = getAverage(assignment1Mark, assignment2Mark , assignment3Mark);
  
  console.log('My assignment marks so far average : ', myAverage);