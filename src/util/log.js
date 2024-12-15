const config = require("../config");

function log(data) {
    if (config.mode == "dev") console.log(data);
}
module.exports = log;
