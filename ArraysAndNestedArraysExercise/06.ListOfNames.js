function solve(input) {

    input.sort();
    let order = 1;

    input.forEach(element => {
        console.log(`${order}.${element}`)
        order++;
    });
}