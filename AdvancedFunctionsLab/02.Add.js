function solution(number) {
    let num = number;

    return function (number) {
        return num + number;
    }
}