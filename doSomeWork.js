/*eslint no-unused-vars:0 */
'use strict';
var http = require('q-io/http'),
    yourFriend = 'http://localhost:7000',
    mine = 'http://localhost:7001';
//may need more than one Promise
http.read(yourFriend)
    .then(function (id) {
        return http.read(mine + '/' + id);
    })
    .then(function (data) {
        console.log(JSON.parse(data));
    })
    .catch((error) => console.log(error.message));