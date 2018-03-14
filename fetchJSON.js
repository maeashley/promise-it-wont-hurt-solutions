/*eslint no-unused-vars:0 */
'use strict';
var http = require('q-io/http'),
    myHost = 'http://localhost:1337';
http.read(myHost)
    .then((data) => console.log(JSON.parse(data)))
    .then(null, (error) => console.log(error.message))
    .done();