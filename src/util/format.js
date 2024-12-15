/**
 * 27 tháng 12 năm 2024
 * @param {String} dataString
 * @returns {Date} date
 */
function getDate(dataString) {
    const s1 = dataString.replace(" tháng ", "-").replace(" năm ", "-");
    const s2 = s1.split("-");
    const date = new Date(`${s2[2]}-${s2[1]}-${s2[0]}`);
    return date;
}

module.exports = { getDate };
