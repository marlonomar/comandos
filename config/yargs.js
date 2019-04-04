/**
 * comandos del yargs
 */
//lista de comandos ================================
const descricion = {
    
        demand:true,
        alias: 'd',
        desc:'descripcion del crear'
    
};

const completado = {
    alias:'c',
    default: true,
    desc:'marca como completado o pendiente la tarea'
};

 //comandos =========================================
const argv = require('yargs')
.command('crear','crear un elemento por hacer',descricion)
.command('listar','lista todos los elementos creados')
.command('actualizar','actualizar el estado completado de una tarea',{
    descricion,
    completado
})
.help()
.argv;



//exportar funciones ===============================
module.exports={
    argv
    }
