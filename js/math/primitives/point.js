class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    equals(point) {
        return this.x == point.x && this.y == point.y;
    }

    draw(ctx, size = 18, color = "black") {

        const rad = size / 2;
        ctx.beginPath();
        ctx.fillStyle = color;
        //arc method of context has following attributes
        //start location x and y
        //radius
        //start and end of the circle in radians(important)
        ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
        ctx.fill();
    }
}