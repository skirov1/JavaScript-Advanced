function solve(arr) {

    let biggestNum = arr[0];

    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= biggestNum) {
            biggestNum = arr[i];
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
