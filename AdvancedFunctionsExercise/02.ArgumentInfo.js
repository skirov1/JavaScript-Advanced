function solve(...args) {
    for (let index = 0; index < arguments.length; index++) {
        console.log(`${typeof(arguments[index])}: ${arguments[index]}`);
    }
    let result = {};
    for (let arg of args) {
        let type = typeof(arg);
        if (!result.hasOwnProperty(type)){
            result[type] = 0;
        }

        result[type] += 1;
    }
    

    for (let [k,v] of Object.entries(result).sort((a,b) => b[1] - a[1])) {
        console.log(k + ' = ' + v);
    }
}