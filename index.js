const inicio = require('./inicio')

const run = async () => {
    console.clear()

    await inicio.getAll()

    console.log('\nPressione ctrl + c para continuar...')
    process.openStdin()
}

run()