const google = require('googleapis');
const key = /*JSON.parse(process.env.PRIVTE_KEY) ||*/ require('../privatekey.json');

module.exports = () => {

  const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    [
      'https://www.googleapis.com/auth/spreadsheets'
    ],
    null
  );

  return new Promise((resolve, reject) => {
    jwtClient.authorize(function (err, tokens) {
      if(err){
        return reject(err)
      }
      return resolve(jwtClient)
    });
  })

}