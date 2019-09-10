const { getApi } = require('./api')

const { getInicio } = require('./inicio')
const { novoGasto } = require('./novo')

const gastosTestes = [
    { data: '1', titulo: 'Alguma coisa', valor: 1, tipoGasto: 'Comida', formaPagamento: 'Dinheiro', comentario: 'Bla' },
    { data: '8', titulo: 'Alguma outra coisa', valor: 99.90, tipoGasto: 'Transporte', formaPagamento: 'Débito', comentario: '' },
    { data: '10', titulo: 'Mais alguma coisa', valor: 948349.05, tipoGasto: 'Compras', formaPagamento: 'Boleto', comentario: null },
    { data: '21', titulo: 'Mais alguma outra coisa', valor: 16.90, tipoGasto: 'Lazer', formaPagamento: 'Transferência',  },
    { data: '30', titulo: 'Alguma coisa', valor: 276.31, tipoGasto: 'Saúde', formaPagamento: 'Crédito', comentario: 'Ble' },
    { data: '7', titulo: 'Alguma outra coisa', valor: 19.00, tipoGasto: 'Contas', formaPagamento: 'Dinheiro', comentario: '' },
    { data: '31', titulo: 'Mais alguma coisa', valor: 30.00, tipoGasto: 'Transferências', formaPagamento: 'Débito', comentario: null },
    { data: '19', titulo: 'Mais alguma outra coisa', valor: 0.16, tipoGasto: 'Investimentos', formaPagamento: 'Transferência' }
]

const inicioTest = async () => {
    console.clear()

    const inicio = await getInicio()
    console.log(`inicio.totalBalancoCorrenteAtual: ${inicio.totalBalancoCorrenteAtual}`)
    console.log(`inicio.totalInvestimentosAtual: ${inicio.totalInvestimentosAtual}`)
    console.table(inicio.resumoMeses)
}

const novoGastoTest = async () => {
    novoGasto(gastosTestes[0])
}

const novosGastosTest = async () => {
    let count = 0
    const interval = setInterval(() => {
        if(count == 7) {
            clearInterval(interval)
        }
        novoGasto(gastosTestes[count])
        count++
    }, 1000)
}

module.exports = {
    inicioTest,
    novoGastoTest,
    novosGastosTest
}
