/*eslint no-unused-vars:0 */
/*eslint no-undef:0 */
'use strict';

function all(prom1, prom2) {
    var promise = new Promise(function (fulfill, reject) {
        var counter = 0,
            counterVals = [];
        prom1.then(function (value) {
            counterVals[0] = value;
            counter++;
            if (counter >= 2) {
                fulfill(counterVals);
            }
        });

        prom2.then(function (value) {
            counterVals[1] = value;
            counter++;
            if (counter >= 2) {
                fulfill(counterVals);
            }
        });
    });
    return promise;
}

all(getPromise1(), getPromise2())
    .then(console.log)
    .catch((error) => console.log(error.message));