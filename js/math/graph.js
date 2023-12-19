class Graph {
    constructor(points = [], segments = []) {
        this.points = points;
        this.segments = segments;
    }

    addPoint(point){
        this.points.push(point);
    }

    checkForPoint(point) {
        //returns something or nothing i.o.w true or false
        return this.points.find((p) => p.equals(point));
    }

    addRandomPoint(point) {
        if(!this.checkForPoint(point)) {
            this.addPoint(point)
            return true;
        }
        return false;
    }

    addSegment(seg) {
        this.segments.push(seg);
    }

    checkForSegment(seg) {
        return this.segments.find((s) => s.equals(seg));
    }

    addRandomSegment(seg) {
        if(!this.checkForSegment(seg)) {
             this.addSegment(seg);
             return true;
        }
        return false;
    }

    draw(ctx) {  
        for (const seg of this.segments){
            seg.draw(ctx);
        }

        for (const point of this.points){
            point.draw(ctx);
        }
    }
}