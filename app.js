
/**
 * programa app que crea un lista de tareas
 */

 //requires=========================================================
const argv = require('./config/yargs').argv;//comandos
const porHacer = require('./por-hacer/por-hacer')//funciones
const colors = require('colors');

//comando principal de la funcion==================================
let comando= argv._[0];


//switch de comandos===============================================
switch (comando) {
    case 'crear':
        let tarea =porHacer.crear(argv.descricion);
        console.log(colors.blue(tarea))
        break;
    case 'listar':
        let listar = porHacer.getListado();
        for(let tarea of listar){
            console.log('=====Por Hacer======'.green)
            console.log(tarea.descricion)
            console.log('estado: ',tarea.completado)
            console.log('===================='.green)
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descricion,argv.completado);
        console.log(actualizado)
        break;
    default:
        console.log(colors.red('comando no reconocido'))
        break;
}