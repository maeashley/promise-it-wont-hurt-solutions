/*eslint no-unused-vars:0 */
'use strict';
var promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        fulfill('FULFILLED!');
    }, 300);
}).then(console.log);