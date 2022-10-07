function getFibonator() {
    let number = 1;
    let n1 = 1;
    let n2 = 1;

    return function getNext() {
        [number, n1, n2] = [n1,n2, n1 + n2];
        return number;
    }
    
}
