// src/googleCalendar.js
const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    'YOUR_CLIENT_ID',
    'YOUR_CLIENT_SECRET',
    'YOUR_REDIRECT_URI'
);

// Generate a URL for user authorization
const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/calendar.readonly',
});

// Get tokens after user authorization
async function getToken(code) {
    const { tokens } = await oauth2Client.getToken(code);
    return tokens;
}

module.exports = { authUrl, getToken };
