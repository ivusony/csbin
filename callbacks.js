
// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {

}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {

}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {

}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {

}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {

}

//Extension 2
function reduce(array, callback, initialValue) {

}
console.log("+++++++++++++++++++Extension 3 - intersection ++++++++++++++++++++")
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce! 

function intersection(arrays){
    let intersected = [];
    if(arguments.length<2){
        return
    }
    arguments[0].forEach(element => {
        var elExistsBoolean = [];
        for (var arrIndex in arguments){
            elExistsBoolean.push(arguments[arrIndex].includes(element));
        }
        if (elExistsBoolean.includes(false)) {
            return false
        }else{
            if (intersected.includes(element)) {
                return false
            }else{
                intersected.push(element);
            }
        }
    });
    console.log(intersected)
}

intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]);
// should log: [5, 15]

console.log("+++++++++++++++++++   Extension 4 - union   ++++++++++++++++++++")
//Extension 4
function union(arrays) {
    let union = [];
    for (var arr in arguments){
        arguments[arr].forEach(element => {
            if (union.includes(element)) {
                return false
            }else{
                union.push(element)
            }
        });
    }
    console.log(union);
    return
}

union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]);
// should log: [5, 10, 15, 88, 1, 7, 100]

console.log("+++++++++++++++++++Extension 5 - objOfMatches ++++++++++++++++++")
// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. 
// To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches 
// the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key 
// in an object, and the element from the second array becomes the corresponding value. 

//Extension 5
function objOfMatches(array1, array2, cb) {
    let newObj = Object.create(null);

        array1.forEach(el=>{
            let elToUpper = cb(el);
            if(array2.includes(elToUpper)){
                newObj[el] = elToUpper
            }
        })

    return console.log(newObj);
}

objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); });
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

console.log("+++++++++++++++++++Extension 56- multiMap ++++++++++++++++++")
// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return 
// an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be 
// arrays consisting of outputs from the array of callbacks, where the input to each callback is the key. 

function multiMap(arrVals, arrCallbacks) {
    let multiMapObj = Object.create(null);

    arrVals.forEach(val => {
        multiMapObj[val] = [];
        arrCallbacks.forEach(cb => {
            multiMapObj[val].push(cb(val))
        })
    })

    return console.log(multiMapObj);
}

multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

