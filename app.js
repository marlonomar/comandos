const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');

let comando= argv._[0];

switch (comando) {
    case 'crear':
        let tarea =porHacer.crear(argv.descricion);
        console.log(colors.blue(tarea))
        break;
    case 'listar':
        console.log(colors.yellow('mostrar todas las tareas por hacer'));
        break;
    case 'actualizar':
        console.log(colors.cyan('actualiza una tarea por hacer'));
        break;
    default:
        console.log(colors.red('comando no reconocido'))
        break;
}