"use strict";

const nkit = require('../');

console.log('ValueUtils.notNullStr null', nkit.Utils.ValueUtils.notNullStr(null));
console.log('ValueUtils.notNullStr json', nkit.Utils.ValueUtils.notNullStr({ a: 1, b: 'bbb' }));
console.log('ValueUtils.notNullStr number', nkit.Utils.ValueUtils.notNullStr(123));
console.log('ValueUtils.notNullStr new Date', nkit.Utils.ValueUtils.notNullStr(new Date()));
console.log('ValueUtils.notNullStr function', nkit.Utils.ValueUtils.notNullStr(function aa() { return 1 }));

const resData = [
    ['val1', '值'],
    ['val2', 123],
    ['val3', undefined]
];
console.log('makeApiMessage', resData, nkit.makeApiMessage('adfsdfs', nkit.MessageCode.success, 'a', 'b', resData));
console.log('makeApiMessage2', nkit.makeApiMessage());