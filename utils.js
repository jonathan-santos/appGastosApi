const getPrimeiroItemRow = (row) => {
    const primeiroItemRow = row[0]
    return primeiroItemRow
}

const getRowComValor = (rows, valor) => {
    let rowComValor = null

    rows.map((row) => {
        if(getPrimeiroItemRow(row) == valor) {
            rowComValor = row
        }
    })
    
    return rowComValor
}

const getValoresRow = (row) => {
    let valores = []

    row.map((rowItem, index) => {
        if(index == 0) {
            return
        }

        valores.push(rowItem)
    })
    
    return valores
}

module.exports = {
    getPrimeiroItemRow,
    getRowComValor,
    getValoresRow
}