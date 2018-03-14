/*eslint no-unused-vars:0 */
'use strict';
var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
}).then(console.log, onRejected);

function onRejected(error) {
    console.log(error);
}