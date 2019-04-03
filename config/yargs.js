
const descr = {
    descricion: {
        demand:true,
        alias: 'd',
        desc:'descripcion del crear'
    }
};

const completado = {
    alias:'c',
    default: true,
    desc:'marca como completado o pendiente la tarea'
};

const argv = require('yargs')
            .command('crear','crear un elemento por hacer',descr)
            .command('actualizar','actualizar el estado completado de una tarea',{
                descr,
                completado
            })
            .help()
            .argv;

module.exports={
    argv
    }
