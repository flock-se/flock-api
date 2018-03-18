const google = require('googleapis');

module.exports = () => {

  var key;
  if(process.env.PRIVATE_KEY){
    key = JSON.parse(process.env.PRIVATE_KEY);
  } else{
    key = require('../privatekey.json');
  }

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