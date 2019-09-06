const { google } = require('googleapis')

const getJWT = () => (
    new Promise((resolve, reject) => {
        const key = require('./auth.json')
        const scopes = 'https://www.googleapis.com/auth/spreadsheets'
        const jwt = new google.auth.JWT(key.client_email, null, key.private_key, scopes)
        const view_id = 'XXXXXXX'
    
        process.env.GOOGLE_APPLICATION_CREDENTIALS = './auth.json'
    
        jwt.authorize((error, response) => {
            if (error) {
                reject(error)
            }

            resolve(jwt)            
        })
    })    
)

module.exports = {
    getJWT
}