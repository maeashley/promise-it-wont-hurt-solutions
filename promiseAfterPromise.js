/*eslint no-undef:0 */
'use strict';

//return another promise in the then function callbacks
//first and second are global functions and already fulfill the promise
first().then(second).then(console.log);