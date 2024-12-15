const axios = require("axios");
const cheerio = require("cheerio");

async function fetchPowerOutageSchedule() {
    try {
        const url = "https://lichcupdien.org/lich-cup-dien-binh-thuan";
        const { data } = await axios.get(url);

        const $ = cheerio.load(data);
        const schedule = [];

        $(".lcd_detail_wrapper").each((index, element) => {
            const match = {};

            match.headquarters = $(element)
                .find(".new_lcd_wrapper:nth-child(1) .item_content_lcd_wrapper")
                .text()
                .trim();
            match.date = $(element)
                .find(".new_lcd_wrapper:nth-child(2) .item_content_lcd_wrapper")
                .text()
                .trim();
            match.time = $(element)
                .find(".new_lcd_wrapper:nth-child(3) .item_content_lcd_wrapper")
                .text()
                .trim();
            match.area = $(element)
                .find(".new_lcd_wrapper:nth-child(4) .item_content_lcd_wrapper")
                .text()
                .trim();
            match.reason = $(element)
                .find(".new_lcd_wrapper:nth-child(5) .item_content_lcd_wrapper")
                .text()
                .trim();
            match.status = $(element)
                .find(".new_lcd_wrapper:nth-child(6) .item_content_lcd_wrapper")
                .text()
                .trim();

            schedule.push(match);
        });

        return schedule;
    } catch (error) {
        console.error("Error fetching power outage schedule:", error);
        return [];
    }
}

module.exports = fetchPowerOutageSchedule;
