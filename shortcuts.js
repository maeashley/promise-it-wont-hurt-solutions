/*eslint no-unused-vars:0 */
'use strict';
var promise = Promise.reject(new Error('SECRET VALUE')).catch(myFunction);

function myFunction(error) {
    console.log(error);
}