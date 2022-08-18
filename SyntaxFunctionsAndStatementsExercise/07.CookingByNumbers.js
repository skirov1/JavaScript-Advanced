function Cook(numberAsString, opr1, opr2, opr3, opr4, opr5) {

    let number = Number(numberAsString);

    number = Operation(number, opr1);
    console.log(number);
    number = Operation(number, opr2);
    console.log(number);
    number = Operation(number, opr3);
    console.log(number);
    number = Operation(number, opr4);
    console.log(number);
    number = Operation(number, opr5);
    console.log(number);

    function Operation(number, operation) {
        switch(operation) {
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number++; break;
            case 'bake': number *= 3; break;
            case 'fillet': number -= number * 0.2; break;
        }
        return number;
    }
}
