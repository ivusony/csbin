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