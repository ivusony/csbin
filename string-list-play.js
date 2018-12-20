//https://adriann.github.io/programming_problems.html

//USING CLOSURES AND RECURSION

//1.
//Write a function that returns the longest element in a list and removes the shortest after each call
(function(){
    function longestAndShortest(list){
        let longest = '';
        let counter = 0;
        function inner(){
        console.log(counter);
           if(list[counter].length>longest.length){
               longest = list[counter];
               counter++;
               
                return longest
             
           }
        }
        return inner
    }
    
    const list = ['Ivan', 'Katarina', 'Natasa'];
    
    let inner = longestAndShortest(list);
    // inner();
    // inner();
    // inner();
    // inner();
    // inner();
    // inner();
})();


//2.
//Write function that reverses a list, preferably in place.
//3.
//Write a function that checks whether an element occurs in a list.
//4.
//Write a function that returns the elements on odd positions in a list.
(function(){
    function reverseList(list){
        //counter1
        let c = list.length-1;
        //counter2
        let cc = 0;
        //returning object
        let methods = {
            printList:function(){
                let reversed = [];
                function pusher(){
                    if(c<0){
                        return
                    }
                    reversed.push(list[c]);
                    c--;
                    pusher()
                };
                pusher();
                return reversed;
            },
            printEach:function(){
                console.log('counter is: '+c);
                if(c<0){
                    return 
                }else{
                    let element = list[c];
                    c--;
                    return element;
                }
            },
            //3.
            findElement:function(elementToFind){
                elementToFind = elementToFind.toLowerCase();
                let elObj = Object.create(null);
                elObj.present =  list.includes(elementToFind) ? true : false;
                elObj.value   =  list.includes(elementToFind) ? elementToFind : undefined;
                elObj.index   =  list.includes(elementToFind) ? list.indexOf(elementToFind) : undefined;
                return elObj;
            },
            //4.
            returnOddElements:function(){
                let newArr = [];
                function arrayPusher(){
                    if(cc>list.length){
                        return
                    }else{
                        if(cc%2>0){
                            newArr.push(list[cc]);
                        }
                        cc++;
                        arrayPusher();
                    }
                }
                arrayPusher();
                return newArr;
            }
        };
        return methods;
    };

    let reverser = reverseList(['ivan', 'kaca', 'natasa', 'ilojka', 'boris', 'ema']);

    // console.log(reverser.printList());
    // console.log(reverser.printEach());
    // console.log(reverser.printEach());
    // console.log(reverser.printEach());
    // console.log(reverser.printEach());
    // console.log(reverser.printEach());
    // console.log(reverser.printEach());
    // console.log(reverser.findElement('ilojka'))
    // console.log(reverser.returnOddElements());

})();

//5
//Write a function that computes the running total of a list.
(function(){
    function runningTotal(){
        let total = 0;
        let elAdded = 0;
        //returned obj
        let obj = {
            add: function(input){
                if(typeof input === 'string'){
                    total+=input.length;
                    elAdded++
                    return total;
                }
                if(typeof input === 'number'){
                    total+=input;
                    return total;
                }
                if (typeof input === 'object') {
                    total+=sumElementArr(input);
                    elAdded+=input.length;
                }
            },
            print:function(){
                return {
                    total: total,
                    added: elAdded
                }
            }
        }
        //end of returned obj
        function sumElementArr(arr){
            let sum = 0;
            arr.forEach(element => {
                sum+=element.length
            });
            return sum;
        }
        function inner(){
            return obj
        }
        return inner
    }

    const addToTotal = runningTotal();
    const methods = addToTotal();
    // console.log(methods.add('Ivan'));
    // console.log(methods.add('Boris'));
    // methods.add(['ivan', 'boris']);
    // console.log(methods.print());
    
    
})();


(function(){
    function sorter(){
        let methods = {
            byNumber:function(){
               console.log(this.input)
            }
        }

        function checkNumber(){
            return typeof this.input==='number' ? true : false
        }
        //if passed more than one argument, return array
        function argsToArr(args){
            let arr = [];
            for(let key in args){
                arr.push(args[key])
            }
            return arr;
        }
        //make array from string
        function singleToArr(input){
            let arr = [];
            if(typeof input==='string'){
                arr = input.split(' ');
            }else{
                arr.push(input)
            }
            return arr;
        }

        function inner(input){
            //creating new obj with proto linked to method obj
            let obj = Object.create(methods);
            //adding input to input property
            if(typeof input==='object'){
                //if array is passed, assign it to input prop
                obj.input = input;
            }else{
                //else if more than one argument is passed or just one is passed, put it in array and assign to input prop
                arguments.length>1 ? obj.input=argsToArr(arguments) : obj.input = singleToArr(input);
            }
            return obj;
        }
        return inner;
    }

    const sort = sorter();
    // sort(45,21,2,3,8,0,13).byNumber()
})();

//concacenate and sort arrays
(function(){
    function concatenate(){
        const methods = (function(){
            return {
                merge: function(){
                    let tempArray = [];
                    for(let key in this.args){
                       this.args[key].forEach(el=>{
                           !tempArray.includes(el) ? tempArray.push(el) : undefined
                       })
                    }    
                    console.log(tempArray);
                }
            }
        })()
        function worker(input){
            const obj = Object.create(methods);
            obj.args = arguments;
            return obj
        }
        return worker
    }
    const $ = concatenate();
    // $([4,8,2,5,6,9], [1,2,8,9,0], [12,45,2,67,12,18,0]).merge()
})();

//convert string to array of words, filter words, return new array
(function(){
    function stringToArray(){
        let dataStore = (function(){
            return {
                filteredArray: [],
                filteredString : '',
                display: function(){
                    console.log(this);
                }
            }
        })();
        let setup = (function(){
            return {
                str2ignore:['a', 'to' ,'is', 'of']
            }
        })();
        function inner(string){
            let c1 = 0,
                c2 = 0;
            let temp = string.split(' ');
            
            function filterArray(element){
                if(c1>=temp.length){return false};
                if(!setup.str2ignore.includes(element)){dataStore.filteredArray.push(element)}
                c1++;
                filterArray(temp[c1]);
            }
            filterArray(temp[c1]);

            function filterString(element){
                if(c2>=dataStore.filteredArray.length){return false};
                dataStore.filteredString+= ' '+element;
                c2++;
                filterString(dataStore.filteredArray[c2]);
            }
            filterString(dataStore.filteredArray[c2])

            return dataStore;
        }
        return inner;
    }

    let str2arr = stringToArray();
    // str2arr("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.").display();
})();

(function() {
    var a = b = 5;
  })();
  
  console.log(b);