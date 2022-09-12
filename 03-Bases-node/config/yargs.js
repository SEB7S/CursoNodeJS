const argv = require('yargs')
    .option('b', {
        alias: 'base',
        describe: 'x marks the spot',
        type: 'number'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) { throw 'ingrese un numero' } return true
    })
    .argv;

module.exports = argv;