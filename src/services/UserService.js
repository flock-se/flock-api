const google = require('googleapis');
const sheets = google.sheets('v4');

const SHEET_ID = '1GmJiSmEPrgJzP4nQi2x71JjkprFiU1UkrBkyA5qSXDI'

var CACHE = null;

module.exports = (jwtClient) => {

  const fetchUsers = () => {
    if(CACHE){
      return Promise.resolve(CACHE)
    }
    return new Promise((resolve, reject) => {
      sheets.spreadsheets.values.get({
        auth: jwtClient,
        spreadsheetId: SHEET_ID,
        range: 'Sheet1!A:E',
      }, function (err, response) {
        if(err){
          reject()
        }
        const data = response.data.values.map(x => {
          return {
            id: x[0],
            name: x[1]
          }
        });
        CACHE = data;
        return resolve(data)
      });
    })
  };

  return {
    findAll : (id) => fetchUsers(),
    findById : (id) => fetchUsers().then(res => res.find(x => x.id === id))
  }

};