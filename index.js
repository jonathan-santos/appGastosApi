const testes = require('./testes')

const run = async () => {
    console.clear()

    // await testes.novoGastoTest()

    await testes.novosGastosTest()

    // await testes.inicioTest()

    console.log('\nPressione ctrl + c para continuar...')
    process.openStdin()
}

run()