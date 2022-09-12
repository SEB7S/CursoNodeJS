
const { crearArchivo } = require('./herlpers/multiplicar');
const  argv  = require('./config/yargs');
console.clear();

/* 
const [,, arg3='base=5'] = process.argv
const [, base] = arg3.split('=') */

/* let base = 1; */
console.log(argv)
crearArchivo(argv.b, argv.h, argv.l)
    .then(msg => {
        console.log('Éxito!!!', msg);
    })
    .catch(err => { err })


