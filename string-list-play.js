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
    methods.add(['ivan', 'boris']);
    console.log(methods.print());
    
    
})();
