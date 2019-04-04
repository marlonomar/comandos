/**
 * funciones del programa app
 */

 //requires==============================
const fs = require('fs')

//
let listadoPorHacer = [];//listado

// guardar json===========================
let guardar = ()=>{

    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('DataBase/dataBase.json',data,(err)=>{
        if(err){
            throw new Error ('no se pudo grabar',err)
        }
    })
}
//guardar base de datos====================
const cargarDB = ()=>{

    try{
        listadoPorHacer = require('../DataBase/dataBase.json');
    }
    catch{
        listadoPorHacer = [];
    }
    
}


//crear base de datos ======================
let crear = (descricion)=>{

    cargarDB()

    let porHacer ={
        descricion,
        completado:false
    }

    listadoPorHacer.push(porHacer);
    guardar()
    return porHacer;

}

//tener listado ============================
let getListado =()=>{
    cargarDB();
    return listadoPorHacer;
}

//actualizar================================
let actualizar =(descricion, completado)=>{
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.descricion === descricion;
    })
    console.log(index)
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardar()
        return true;
    }else{
        return false;
    }
}
//exportar funciones========================
module.exports={
    crear,
    getListado,
    actualizar
    
}