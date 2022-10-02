function solve(area, vol, input) {
    input = JSON.parse(input);

    let result = [];

    for (let entry of input) {
        let calculatedArea = area.call(entry);
        let calculatedVolume = vol.call(entry);

        result.push({
            area: calculatedArea,
            volume: calculatedVolume
        });
    }

    return result;
}

let area = function area() {
    return Math.abs(this.x * this.y);
};

let vol = function vol() {
    return Math.abs(this.x * this.y * this.z);
};