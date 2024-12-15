const { getDate } = require("./format");
const log = require("./log");

const date1 = new Date("2024-12-27");
const date2 = getDate("27 tháng 12 năm 2024");
console.log(date1);
console.log(date2);

const now = new Date();
log(date1.getDate() - now.getDate());
