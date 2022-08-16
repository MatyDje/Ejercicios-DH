const dato = require("./funciones-de-tareas");

let arrayTareas = dato.leerArchivo();

const accion = process.argv[2];



switch (accion) {
    case "listar":
      //console.log(arrayTareas)

      for(let i = 0; i < arrayTareas.length; i++){
        console.log(arrayTareas[i].titulo + " : " + arrayTareas[i].estado);
      }

      //arrayTareas.forEach((tarea,index)=>{
      //       console.log((iindex+1) + "-" + arrayTareas.titulo + "-" + arrayTareas.estado)
      //       console.log(`${index+1} - ${arrayTareas.titulo} - ${arrayTareas.estado}`)
      //});
    break;

    case (undefined) :
        console.log("No entiendo que queres hacer");
    break;

    default:
        console.log("Atencion tienes que pasar una accion");
        
}