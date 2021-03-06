// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');
// Challenge 1
// Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". 

function createFunction() {
    return function(){
        console.log('hello')
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var function1 = createFunction();
// function1();


// Challenge 2
// Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created. 

function createFunctionPrinter(input) {
    return function(){
        console.log(input)
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var printSample = createFunctionPrinter('sample');
// printSample();
// var printHello = createFunctionPrinter('hello');
// printHello();


// Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
// Uncomment those lines of code. Try to deduce the output before executing. 


function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


// Now we are going to create a function addByX that returns a function that will add an input by x. 

function addByX(x) {
    function inner(num){
        return x+=num;
    }
    return inner
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1

// console.log(addByTwo(1));

// // now call addByTwo with an input of 2
// console.log(addByTwo(2));


//--------------------------------------------------
// Extension
//--------------------------------------------------
// Extension: Challenge 5
// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time,
// it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return 
// the output value from the first time it was called. 

function once(func) {
    let counter = 0;
    let result = 0;
   function inner(num){
       counter++;
       if (counter>1) {
           return result;
       }
       result = func(num);
       return result;
   }
   return inner
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6


// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter. 

function after(count, func) {
    let counter = 0;
    function inner(){
        counter++
        if(counter<count){
            console.log(counter +' ' + count)
            return
        }else{
            called()
        }
    }
    return inner
}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed


function delay(func, wait) {

}




function closedOver(){
    let counter = 0;
    let methods = {
        greet: function(){
            console.log('Hello')
        },
        incrementCounter: function(num){
            counter+=num;
            console.log(counter);
            return
        },
    }
    

    function inner(){
        let obj = Object.create(methods);
        return obj;
    }
    return inner;
}


let objectMaker = closedOver();
let newObj = objectMaker();

newObj.incrementCounter(20);
newObj.incrementCounter(50);