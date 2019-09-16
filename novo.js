const { getApi } = require('./api')

const novoGasto = async (gasto, key) => {
    const api = await getApi(key)

    try {
        console.log("novoGasto: " + JSON.stringify(gasto))

        const partesData = gasto.data.split('/')
        const data = {
            dia: partesData[0],
            mes: partesData[1],
            ano: partesData[2]
        }
        await api.post(`values/${data.mes}%2F${data.ano}!A5:F5:append`, {
            values: [[
                data.dia,
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