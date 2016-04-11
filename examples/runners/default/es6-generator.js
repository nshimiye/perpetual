'use strict';

/**
 * @source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 */

// count from 1 ...
function * idMaker() {
    let x = 0;
    while(true) { x = x + 1; yield x; }
}
let incrementer = idMaker( 1 );

// note: not sending anything into `next()` here
console.log( incrementer.next() );   // { value: 1, done: false }
console.log( incrementer.next() );   // { value: 2, done: false }
console.log( incrementer.next() );   // { value: 3, done: false }

let incrementer1 = idMaker( 1 );
console.log( incrementer1.next() );   // { value: 1, done: false }
