const { getApi } = require('./api')

const novoGasto = async (gasto) => {
    const api = await getApi()

    try {
        console.log("novoGasto: " + JSON.stringify(gasto))
        await api.post("values/janeiro!H3:M3:append", {
            values: [[
                gasto.data,
                gasto.titulo,
                gasto.valor,
                gasto.tipoGasto,
                gasto.formaPagamento,
                gasto.comentario
            ]]
        }, {
            params: {
                valueInputOption: 'RAW'
            }
        })
    } catch (erro) {
        console.log('Erro durante POST de novoGasto \nErro: ' + erro)
    }
}

module.exports = {
    novoGasto
}