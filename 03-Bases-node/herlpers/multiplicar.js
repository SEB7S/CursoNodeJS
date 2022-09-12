const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 5 , hasta = 10, listar) => {

    try {
        let salida, consola = ''
        const tabla = (base => {
            for (let index = 1; index <= hasta; index++) {
                salida += `${base} x ${index} =  ${base * index}\n`;
                consola += `${base} ${colors.green('x')} ${index}  ${'='.green}  ${base * index}\n`;
            }
        })
        tabla(base)
        listar ?  console.log(consola) : null
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return 'archivo guardado'.america;
    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}