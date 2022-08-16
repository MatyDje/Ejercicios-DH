const funcionesDeTareas = require("./funciones-de-tareas");

let arrayTareas = funcionesDeTareas.leerArchivo();

const accion = process.argv[2];

const estado = process.argv[3];



switch (accion) {
  case "listar":
    console.log("Lista de Tareas")
    console.log("________________")
    arrayTareas.forEach((arrayTareas, index) => {
      //console.log((index+1) + "-" + arrayTareas.titulo + "-" + arrayTareas.estado)
        console.log(`${index + 1} - ${arrayTareas.titulo} - ${arrayTareas.estado}`)
    });

    break;

  case "crear":

    const titulo = process.argv[3];

    let nuevaTarea = { titulo: titulo, estado: "pendiente" }

    funcionesDeTareas.guardarTarea(nuevaTarea);

    console.log("Guardado con exito!")
    console.log(nuevaTarea.titulo + " --> " + nuevaTarea.estado)

    break;

  case "filtrar":
    
    let arrayFiltrado = funcionesDeTareas.filtrarPorEstado(estado)

    console.log("Lista de Tareas " + estado )
    console.log("__________________________")
    arrayFiltrado.forEach((tarea, index)=>{
      console.log(`${index + 1} - ${tarea.titulo} - ${tarea.estado}`)
    })
    break;

  case (undefined):
    console.log("No entiendo que queres hacer");
    break;

  default:
    console.log("Atencion tienes que pasar una accion");

}