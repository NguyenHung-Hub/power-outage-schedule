const { getDate } = require("./util/format");

/**
 *
 * @param {Array<
 * {
 *  headquarters:string,
 *  date:string,
 *  time:string,
 *  area:string,
 *  reason:string,
 *  status:string,
 * }
 * >} schedules
 *
 * @returns {Array<
 * {
 *  headquarters:string,
 *  date:string,
 *  time:string,
 *  area:string,
 *  reason:string,
 *  status:string,
 * }
 * >} schedules
 */
function filterSchedule(schedules, areaFilter, countDay) {
    const result = schedules.filter((s) => {
        const now = new Date();
        const d = getDate(s.date);
        const day = d.getDate() - now.getDate();

        if (s.area.includes(areaFilter) && day <= countDay) {
            return s;
        }
    });
    return result;
}

module.exports = filterSchedule;
