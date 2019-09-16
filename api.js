const axios = require('axios')

const idPlanilha = '1MV3AOF5m4YdSi7EbfH6Jc3szfhvyapu5uRSYm6hNbRc'

const api = (token) => {
    const api = axios.create({
        baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${idPlanilha}`,
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    return api
}

module.exports = api

//Planilha: https://docs.google.com/spreadsheets/d/1MV3AOF5m4YdSi7EbfH6Jc3szfhvyapu5uRSYm6hNbRc/edit#gid=0
//Using the Sheets Api V4:
//GET: https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
//POST: https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append
//PUT: https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update