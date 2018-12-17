class inputCheck{
    constructor(input){
        this.input = input;
        this.events = {}
    }
    addEvent(eventName, cb){
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(cb);
    }
    trigger(event, toCheck){
        !this.events[event] ? console.log('No such event') : this.events[event].forEach(cb => {
            cb.call(this, toCheck)
        }); 
    }
}


const check = new inputCheck('243859403423');

check.addEvent('length', function(){
    console.log('str: ' + str);
    //check if empty or not string
    if(!str || !typeof str==='string'){return false};
    //trim and assign input to input prop of the object
    this.input = str.trim();
    return this.input;
})

check.addEvent('length', function(lengthToCheck){
    console.log('lengthToCheck: ' + lengthToCheck);
    if(!lengthToCheck || !typeof lengthToCheck==='number'){return false};
    if (this.input.length < lengthToCheck || this.input.length > lengthToCheck) {
        console.log('Problem!');
        return
    }
    console.log('Check ok')
})

check.trigger('length', '         ajdneksbdhse', 12);
