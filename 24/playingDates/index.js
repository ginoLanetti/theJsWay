const moment = require('moment');
const now = moment().format('LLLL');
const then = moment("19761126", "YYYYMMDD").fromNow();
console.log(now);
console.log(then);