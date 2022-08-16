function Calculate(arr){
    let sum = 0;
    let inverseSum = 0;
    let arrayAsString = "";

    arr.forEach(element => {
        sum += element
    });

    arr.forEach(element => {
        inverseSum += 1 / element;   
    });
    
    arr.forEach(element => {
        arrayAsString += element;
   });
    
    console.log(sum);
    console.log(inverseSum);
    console.log(arrayAsString)
}
