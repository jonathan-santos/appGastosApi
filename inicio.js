const apiGSheet = require('./api')
const api = apiGSheet.api
const apiConfig = apiGSheet.apiConfig

const utils = require('./utils')

const getResumoAno = async () => {
    const res = await api.get('values/2019', apiConfig)
    return res.data.values
}

const getTotalBalancoCorrenteAtual = (resumoAno) => {
    const row = utils.getRowComValor(resumoAno, 'Balanço Conta Corrente (Final)')
    return row[1]
}

const getTotalInvestimentosAtual = (resumoAno) => {
    const row = utils.getRowComValor(resumoAno, 'Total Investimentos (Fim)')
    return row[1]
}

const getResumoMeses = (resumoAno) => {
    // Resultado esperado: [ { titulo: "Janeiro", ganhos: 1000, gastos: 500 }, ... ]
    let titulos = []
    let ganhos = []
    let gastos = []
    resumoAno.map((row, index) => {
        if(index == 20) {
            titulos = utils.getValoresRow(row)
        } else if(index == 21) {
            ganhos = utils.getValoresRow(row)
        } else if(index == 22) {
            gastos = utils.getValoresRow(row)
        }
    })

    const resumoMeses = []

    for(let i = 0; i <= 11; i++) {
        resumoMeses.push({
            titulo: titulos[i],
            ganhos: ganhos[i],
            gastos: gastos[i]
        })    
    }    
    
    return resumoMeses
}

const getInicio = async () => {
    const resumoAno = await getResumoAno()

    const totalInvestimentosAtual = getTotalInvestimentosAtual(resumoAno)
    const totalBalancoCorrenteAtual = getTotalBalancoCorrenteAtual(resumoAno)
    const resumoMeses = getResumoMeses(resumoAno)

    return {
        totalBalancoCorrenteAtual,
        totalInvestimentosAtual,
        resumoMeses
    }
}

module.exports = getInicio