"use strict";
exports.__esModule = true;
var nkit = require("../dist");
var dist_1 = require("../dist");
var data = nkit.makeReturnMessage('akdjlaflsjflsakjfsajflsjf');
var resData = [
    ['val1', '值'],
    ['val2', 123],
    ['val3', undefined]
];
var d2 = nkit.makeApiMessage('adfsdfs', dist_1.MessageCode.success, 'a', 'b', resData);
console.log('ValueUtils.notNullStr null', nkit.Utils.ValueUtils.notNullStr(null));
console.log('interface', data, d2);
