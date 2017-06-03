var moment = require('moment');

var date = moment();
console.log(date.format('MMM Do, YYYY')); // eg. Sep 30th, 2017
console.log(date.format('h:mm a')); // eg. 8:54 pm
// for more moment patterns, check out momentjs documentation page

// manipulating years, quarters, months, days, etc
date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));

// pass a timestamp to moment
var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));

// create timestamp with moment
var someTimestamp = moment().valueOf();
console.log(someTimestamp);
