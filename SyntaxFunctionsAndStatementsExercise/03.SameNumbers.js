function AreSame(number) {

    let baseDigit = number % 10;
    let areSame = true;
    let sum = 0;

    while(number > 0) {
 
    let digit = number % 10;
    if(digit != baseDigit) {
        areSame = false;
    }
    sum += digit;
    number = (number / 10).toFixed();
   }

    console.log(areSame);

    console.log(sum);
}
