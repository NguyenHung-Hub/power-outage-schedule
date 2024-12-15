const express = require("express");
const cron = require("node-cron");
const runTask = require("./src/task");
const log = require("./src/util/log");

const app = express();
app.use(express.json());

function main() {
    log("Cronjob running");
    cron.schedule("0 0 15 * *", runTask);
}

app.get("/email/send", async (req, res) => {
    main();
    res.status(200).json({ message: "Cronjob running" });
});

app.listen(3000, () => {
    console.log(`Server running at localhost:${3000}/`);
});
