function solve(input) {

    input.sort(function(a, b) {
        if(a.length > b.length) {
            return 1;
        } else if(b.length > a.length) {
            return -1;
        } else {
            if(a > b) {
                return 1;
            } else if(b > a) {
                return -1;
            } else {
                return 0;
            }
        }      
    })
    input.forEach(element => {
        console.log(element);
    });
}