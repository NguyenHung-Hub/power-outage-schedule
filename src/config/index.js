const dotenv = require("dotenv");
dotenv.config();

const config = {
    mode: "dev",
    countDay: process.env.COUNT_DAY,
    oauth2: {
        clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_OAUTH2_REFRESH_TOKEN,
        adminEmailAddress: process.env.ADMIN_EMAIL_ADDRESS,
    },
};
module.exports = config;
