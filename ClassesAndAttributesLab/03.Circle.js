class Circle {
    constructor(radius) {
        this.radius = radius;
    }
   
    get diameter() {
        return this.radius * 2;
    }
    
    set diameter(diameter) {
        this.diam = diameter
        this.radius = this.diam / 2;
    }

    get area()  {
        return Math.PI * this.radius * this.radius;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
