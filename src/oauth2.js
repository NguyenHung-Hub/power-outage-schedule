const { OAuth2Client } = require("google-auth-library");
const config = require("./config");

const myOAuth2Client = new OAuth2Client(
    config.oauth2.clientId,
    config.oauth2.clientSecret
);

myOAuth2Client.setCredentials({
    refresh_token: config.oauth2.refreshToken,
});

module.exports = { myOAuth2Client };
