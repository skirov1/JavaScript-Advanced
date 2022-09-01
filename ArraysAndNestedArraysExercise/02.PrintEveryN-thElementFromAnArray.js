function solve(arr, N) {

    let newArr = [];

    for(let i = 0; i < arr.length; i += N) {
        newArr.push(arr[i]);
    }

    return newArr;
}