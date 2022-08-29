function PrintTwoSmalletstNumbers(arr) {
    arr = arr.sort(compare);

    console.log(arr[0] + ' ' + arr[1]);

    function compare(a, b) {
        if (a > b){
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    
    }
}