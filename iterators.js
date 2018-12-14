// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1
// Challenge 1
// A) Create a for loop that iterates through an array and returns the sum of the elements of the array.
// B) Create a functional iterator for an array that returns each value of the array when called, one element at a time. 

function sumFunc(arr) {
  // YOUR CODE HERE
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
    }
    return sum;
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  // YOUR CODE HERE
    let c = 0;
    function inner(){
        let temp =  arr[c];
            c++;
            return temp;
    }
    return inner
}

// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'


console.log("++++++++++++++++++++++++CHALLENGE 2+++++++++++++++++++++++++++")

// Create an iterator with a next method that returns each value of the array when .next is called. 

function nextIterator(arr) {
  // YOUR CODE HERE
    let c = 0;
    let obj = {
        arr:arr,
        next: function(){
            let temp = arr[c];
            c++;
            return temp;        
        }
    }
    return obj;
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3


console.log("++++++++++++++++++++++++CHALLENGE 3+++++++++++++++++++++++++++")

// Write code to iterate through an entire array using your nextIterator and sum the values. 

function sumArray(arr) {
    // YOUR CODE HERE
    // use your nextIterator function
    let next = nextIterator(arr);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum+= next.next()
    }
    return sum;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10


console.log("+++++++++++++++++++++++++CHALLENGE 4++++++++++++++++++++++++++++")
// Create an iterator with a next method that returns each value of a set when .next is called 

function setIterator(set) {
  // YOUR CODE HERE
  let vals = set.keys();
  return vals;

}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
console.log(setIterator(mySet))
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'


console.log("++++++++++++++++++++++++CHALLENGE 5++++++++++++++++++++++++++++")
// Create an iterator with a next method that returns an array with two elements 
// (where the first element is the index and the second is the value at that index) when .next is called. 

function indexIterator(arr) {
  // YOUR CODE HERE
  let c = 0;
  let obj = {
      arr:arr,
      next: function(){
          let newArr = [c, arr[c]];
          c++;
          return newArr;
      }
  }
  return obj

}

// Uncomment the lines below to test your work
const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  // YOUR CODE HERE

}

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array){

}

const returnedSentence = valueAndPrevIndex([4,5,6])
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {


}

console.log(createConversation('english').next());



//CHALLENGE 9
function waitForVerb(noun) {

}

async function f(noun) {

}

f("dog");

