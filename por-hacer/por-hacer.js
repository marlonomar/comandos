const fs = require('fs')

let listadoPorHacer = [];

let guardar = ()=>{

    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('DataBase/dataBase.json',data,(err)=>{
        if(err){
            throw new Error ('no se pudo grabar',err)
        }
    })
}

let crear = (descricion)=>{
    let porHacer ={
        descricion,
        completado:false
    }

    listadoPorHacer.push(porHacer);
    guardar()
    return porHacer;

}

module.exports={
    crear
    
}