function PrintBiggerHalf(arr) {

    const newArr = [];

    arr.sort(compare);

    for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    return newArr;

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
