/*eslint no-unused-vars:0 */
'use strict';
var invalid = process.argv[2];

function parsePromised(data) {
    return new Promise(function (fulfill, reject) {
        try {
            fulfill(JSON.parse(data));
        } catch (error) {
            reject(error);
        }
    });
}

parsePromised(invalid).then(console.log, function (error) {
    console.log(error.message);
});