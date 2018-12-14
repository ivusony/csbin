class inputCheck{
    constructor(){
        this.input;
        this.events = {}
    }
    addEvent(eventName, cb){
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(cb);
    }
    trigger(event, onWhat, toCheck){
        !this.events[event] ? console.log('No such event') : this.events[event].forEach(cb => {
            cb(onWhat, toCheck)
        }); 
    }
}


const check = new inputCheck();

check.addEvent('lengthCheck', function(str, lengthToCheck){
    if (str.length < lengthToCheck) {
        console.log('Problem!');
    }
})

check.trigger('lengthCheck', 'abrakadabra', 12);