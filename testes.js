const { getInicio } = require('./inicio')
const { novoGasto } = require('./novo')

const gastosTestes = [
    { data: '1/1/2019', titulo: 'Alguma coisa', valor: 1, tipoGasto: 'Comida', formaPagamento: 'Dinheiro', comentario: 'Bla' },
    { data: '2/2/2019', titulo: 'Alguma outra coisa', valor: 99.90, tipoGasto: 'Transporte', formaPagamento: 'Débito', comentario: '' },
    { data: '3/3/2019', titulo: 'Mais alguma coisa', valor: 545.31, tipoGasto: 'Compras', formaPagamento: 'Boleto', comentario: null },
    { data: '4/4/2019', titulo: 'Mais alguma outra coisa', valor: 16.90, tipoGasto: 'Lazer', formaPagamento: 'Transferência',  },
    { data: '5/5/2019', titulo: 'Alguma coisa', valor: 276.31, tipoGasto: 'Saúde', formaPagamento: 'Crédito', comentario: 'Ble' },
    { data: '6/6/2019', titulo: 'Alguma outra coisa', valor: 19.00, tipoGasto: 'Contas', formaPagamento: 'Dinheiro', comentario: '' },
    { data: '10/7/2019', titulo: 'Mais alguma coisa', valor: 30.00, tipoGasto: 'Transferências', formaPagamento: 'Débito', comentario: null },
    { data: '15/8/2019', titulo: 'Mais alguma outra coisa', valor: 0.16, tipoGasto: 'Investimentos', formaPagamento: 'Transferência' },
    { data: '20/9/2019', titulo: 'Alguma coisa', valor: 931.10, tipoGasto: 'Lazer', formaPagamento: 'Boleto', comentario: 'Bli' },
    { data: '25/10/2019', titulo: 'Alguma outra coisa', valor: 20.99, tipoGasto: 'Contas', formaPagamento: 'Dinheiro', comentario: '' },
    { data: '30/11/2019', titulo: 'Mais alguma coisa', valor: 99.90, tipoGasto: 'Comida', formaPagamento: 'Débito', comentario: null },
    { data: '31/12/2019', titulo: 'Mais alguma outra coisa', valor: 5.45, tipoGasto: 'Transporte', formaPagamento: 'Transferência' },
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
        if(count == gastosTestes.length - 1) {
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
