function rectangle(pwidth, pheight, pcolor) {
    class Rectangle {
        constructor(width, height, color) {
            this.width = width;
            this.height = height;
            this.color = color.charAt(0).toUpperCase() + color.slice(1)
        }
        calcArea() {
            return this.width * this.height;
        }
    }
    let obj = new Rectangle(pwidth, pheight, pcolor);
    return obj;
}
