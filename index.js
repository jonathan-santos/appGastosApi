const getInicio = require('./inicio')

const run = async () => {
    console.clear()

    const inicio = await getInicio()
    console.log(`inicio.totalBalancoCorrenteAtual: ${inicio.totalBalancoCorrenteAtual}`)
    console.log(`inicio.totalInvestimentosAtual: ${inicio.totalInvestimentosAtual}`)
    console.table(inicio.resumoMeses)

    console.log('\nPressione ctrl + c para continuar...')
    process.openStdin()
}

run()