const axios = require('axios')

const modeloGastos = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRGrl2y-FTnTqRKsdwWU-ijPal1fZS8DOEChu2SZZ2xeu6ynS4sLyeORoHKRUS_CsQZHJRogPSKneo3/pubhtml'
//GET https://sheets.googleapis.com/v4/spreadsheets/1MV3AOF5m4YdSi7EbfH6Jc3szfhvyapu5uRSYm6hNbRc/values/2019?key=AIzaSyAeYZR5gaJXZTFT3MvIlDEAE-jIEZoeqvA

//GET: https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
//PUT: https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update

const idPlanilha = '1MV3AOF5m4YdSi7EbfH6Jc3szfhvyapu5uRSYm6hNbRc'
const apiKey = 'AIzaSyAeYZR5gaJXZTFT3MvIlDEAE-jIEZoeqvA'

const api = axios.create({
    baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${idPlanilha}`
});

const apiConfig = {
    params: {
        key: apiKey
    }
}

module.exports = {
    api,
    apiConfig
}