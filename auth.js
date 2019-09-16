const { google } = require('googleapis')

const getJWT = (key) => (
    new Promise((resolve, reject) => {
        const scopes = 'https://www.googleapis.com/auth/spreadsheets'
        const jwt = new google.auth.JWT(key.client_email, null, key.private_key, scopes)
    
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