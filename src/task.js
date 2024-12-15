const fetchPowerOutageSchedule = require("./fetchSchedule");
const filterSchedule = require("./filterSchedule");
const getTemplate1 = require("./template/email");
const sendEmail = require("./sendEmail");
const config = require("./config");

async function runTask() {
    console.log("Running task to fetch power outage schedule...");
    const schedule = await fetchPowerOutageSchedule();
    const filterData = filterSchedule(schedule, "Trà Tân", config.countDay);
    console.log(`file: task.js:10 > filterData:`, filterData);

    if (filterData.length > 0) {
        const emailContent = getTemplate1(filterData);
        console.log(`file: task.js:14 > emailContent:`, emailContent);

        const mailOptions = {
            to: "daminhnguyenhung@gmail.com",
            subject: "Thông báo lịch cúp điện",
            html: `${emailContent}`,
        };
        console.log("> sending mail");

        try {
            const result = await sendEmail(mailOptions);
            console.log(`file: task.js:20 > result:`, result);
        } catch (error) {
            log(error);
        }
    } else {
        console.log("No schedule data found.");
    }
}

module.exports = runTask;
