const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'HANSAMAL-MD=MpogyaAQ#X2rO41Mdu7YW6iMPYImNCr2nwHw7mkAfDb5O206Y3PE' : process.env.SESSION_ID,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'dickens2007' : process.env.GITHUB_USER_NAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '' : process.env.GITHUB_AUTH_TOKEN,        
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '255695 748 562' : process.env.OWNER_NUMBER
};
