'use strict';
/*
 * what the result of "typeof" <es6 instance name>
 * We test using instance of Point class
 * @author Marcellin<nmarcellin2@gmail.com>
 * @source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {

        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}

const point = new Point(5, 5);

console.log(' [ result of typeof ] ', typeof point);
console.log(' [ result of instanceof ] ', point instanceof Point);
