const apiGSheet = require('./api')
const api = apiGSheet.api
const apiConfig = apiGSheet.apiConfig

const run = async () => {
    console.clear()
    const res = await api.get('values/2019', apiConfig)
    console.log(res)
}

run()