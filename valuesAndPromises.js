/*eslint no-unused-vars:0 */
'use strict';

function attachTitle(x) {
    return 'DR. ' + x;
}
//value of fulfilled Promise = 'MANHATTAN'
Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);