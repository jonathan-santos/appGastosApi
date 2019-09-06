const axios = require('axios')

const auth = require('./auth')
//Planilha: https://docs.google.com/spreadsheets/d/1MV3AOF5m4YdSi7EbfH6Jc3szfhvyapu5uRSYm6hNbRc/edit#gid=0
//GET: https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
//PUT: https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update

const getApi = async () => {
    const idPlanilha = '1MV3AOF5m4YdSi7EbfH6Jc3szfhvyapu5uRSYm6hNbRc'
    const jwt = await auth.getJWT()
    
    const api = axios.create({
        baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${idPlanilha}`,
        headers: {
            Authorization: 'Bearer ' + jwt.credentials.access_token
        }
    });

    return api
}

module.exports = {
    getApi
}