const { getApi } = require('./api')

const novoGasto = async (gasto) => {
    const api = await getApi()
    await api.post('values/Janeiro!A1:F1:append', {
        values: [[
            gasto.data,
            gasto.formaPagamento,
            gasto.titulo,
            gasto.valor,
            gasto.tipoGasto,
            gasto.comentario
        ]]
    }, {
        params: {
            valueInputOption: 'RAW'
        }
    })
}

module.exports = {
    novoGasto
}