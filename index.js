const { getInicio } = require('./inicio')
const { novoGasto } = require('./novo')

const run = async () => {
    console.clear()

    const inicio = await getInicio()
    console.log(`inicio.totalBalancoCorrenteAtual: ${inicio.totalBalancoCorrenteAtual}`)
    console.log(`inicio.totalInvestimentosAtual: ${inicio.totalInvestimentosAtual}`)
    console.table(inicio.resumoMeses)

    novoGasto({
        data: '1',
        titulo: 'Alguma coisa',
        valor: 1,
        tipoGasto: 'Compras',
        formaPagamento: 'Dinheiro',
        comentario: 'bla'
    })

    console.log('\nPressione ctrl + c para continuar...')
    process.openStdin()
}

run()