function solve(input) {
    const result = [];

    for (let i = 0; i < input.length - 1; i += 2){
        const product = {
            name : input[i],
            calories : input[i + 1]
        };
        result.push(product);
    }
    
    let output = [];

     result.forEach(element => {
        output.push(`${element.name}: ${element.calories}`);
    });

    return `{ ${output.join(', ')} }`;
}