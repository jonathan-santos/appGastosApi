const api = require('./api')

const novoGasto = async (gasto, token) => {
    const partesData = gasto.data.split('/')
    const data = {
        dia: partesData[0],
        mes: partesData[1],
        ano: partesData[2]
    }
    
    try {
        await api(token).post(`values/${data.mes}%2F${data.ano}!A5:F5:append`, {
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

        console.log("novoGasto: " + JSON.stringify(gasto))
    } catch (erro) {
        console.log('Erro durante POST de novoGasto \nErro: ' + erro)
    }
}

module.exports = {
    novoGasto
}