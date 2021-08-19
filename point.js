export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(`X: ${this.x} Y: ${this.y}`);
    }
    get X() {
        return this.x;
    }
    set X(value) {
        if (value > 0)
            this.x = value;
    }
}
