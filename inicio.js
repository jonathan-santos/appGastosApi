const apiGSheet = require('./api')
const api = apiGSheet.api
const apiConfig = apiGSheet.apiConfig

const getResumoAno = async () => {
    const res = await api.get('values/2019', apiConfig)
    return res
}

const getTotalInvestimentosAtual = (resumoAno) => {
    return 0
}

const getTotalBalancoCorrenteAtual = (resumoAno) => {
    return 0
}

const getResumoMeses = (resumoAno) => {
    return 0
}

const getAll = async () => {
    const resumoAno = await getResumoAno()

    const totalInvestimentosTotal = getTotalInvestimentosAtual(resumoAno)
    const totalBalancoCorrenteAtual = getTotalBalancoCorrenteAtual(resumoAno)
    const resumoMeses = getResumoMeses(resumoAno)

    console.log(`totalInvestimentosTotal: ${totalInvestimentosTotal}`)
    console.log(`totalBalancoCorrenteAtual: ${totalBalancoCorrenteAtual}`)
    console.log(`resumoMeses: ${resumoMeses}`)
}

module.exports = {
    getAll
}