const nodemailer = require("nodemailer");
const config = require("./config");
const { myOAuth2Client } = require("./oauth2");
const log = require("./util/log");

// /**
//  *
//  * @param {Array<
//  * {
//  *  headquarters:string,
//  *  date:string,
//  *  time:string,
//  *  area:string,
//  *  reason:string,
//  *  status:string,
//  * }
//  * >} schedules
//  */
// async function sendEmail(schedules) {
//     try {
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: "your-email@gmail.com", // Replace with your email
//                 pass: "your-email-password", // Replace with your email password or app-specific password
//             },
//         });

//         const emailContent = getTemplate1(schedules);

//         const mailOptions = {
//             from: "your-email@gmail.com",
//             to: "hung@gmail.com",
//             subject: "Daily Power Outage Schedule",
//             html: `${emailContent}`,
//         };

//         await transporter.sendMail(mailOptions);
//         console.log("Email sent successfully.");
//     } catch (error) {
//         console.error("Error sending email:", error);
//     }
// }

async function sendEmail(options) {
    log("get accessToken...");
    const accessToken = await myOAuth2Client.getAccessToken();
    log(accessToken);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: config.oauth2.adminEmailAddress,
            clientId: config.oauth2.clientId,
            clientSecret: config.oauth2.clientSecret,
            refreshToken: config.oauth2.refreshToken,
            accessToken: accessToken.token,
        },
    });

    return transporter.sendMail(options, (err, info) => {
        if (err) {
            log(`file: sendEmail.js:60 > err:`, err);
            return err;
        }
        return info;
    });
}

module.exports = sendEmail;
