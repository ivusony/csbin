function outer(){
    let counter = 0;
    let obj = {
        add:function(){
             counter++;
             return counter;
        }
    }
    return function inner(){
        return obj
    }
}


const out = outer();
const out2 = out();

let test = out2.add();

console.log(test)