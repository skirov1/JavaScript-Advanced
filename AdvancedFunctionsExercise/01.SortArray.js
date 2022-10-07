function solve(arr, criteria) {
    if(criteria == 'asc') {
        arr.sort((a,b) => b - a);
        arr.reverse();
    } else if (criteria == 'desc') {
        arr.sort((a,b) => b - a);
    }
    return arr;
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));