/*eslint no-unused-vars:0 */
//good practice to always have a catch block at the end of your promise chain
'use strict';

function alwaysThrows() {
    throw new Error('OH NOES');
}

function iterate(thing) {
    console.log(thing);
    return thing + 1;
}
var promise = Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((error) => console.log(error.message));
//if you are not returning a VALUE from your promise to a handler, then attach a .done() handler. In this case you are, because you aren't 
//sending the promise back.