function solve(input) {
    let number = 1;

    let numbers = [];
    
    for (let i = 0; i < input.length; i++) {

        if(input[i] == 'add') {
            numbers.push(number);
        } 
        else if(input[i] == 'remove') {
            numbers.pop();       
        }
        
        number++;
    }

    if (numbers.length <= 0) {
        console.log('Empty')
    } 
    else 
    {
        for (let i = 0; i < numbers.length; i++) {
            console.log(numbers[i]);
        }
    }  
}
