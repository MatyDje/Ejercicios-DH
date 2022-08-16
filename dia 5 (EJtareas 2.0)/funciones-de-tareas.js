const fs = require("fs");

let archivoDeTareas = {
   nombreDeArchivo: "tareas.json",

   leerArchivo: function () {
      let tareas = fs.readFileSync(this.nombreDeArchivo, "utf-8");
      return JSON.parse(tareas);
   },

   escribirEnJSON: function (arrayTareas) {
      let myJSON = JSON.stringify(arrayTareas, null, " ")
      fs.writeFileSync(this.nombreDeArchivo, myJSON, undefined)
   },

   guardarTarea: function (objetoTarea) {

      let array = this.leerArchivo()
      array.push(objetoTarea)
      this.escribirEnJSON(array)
   },

   filtrarPorEstado: function (estado) {
      let array = this.leerArchivo()

      //let arrayFiltrado = array.filter((tarea) => tarea.estado === estado)
      
      
      //let arrayFiltrado = [];

      //for (let i = 0; i<array.length; i++ ){

      //   if (array[i].estado === estado){

      //       arrayFiltrado.push(array[i])
      //}

      let arrayFiltrado = array.filter(function(tarea){
      return tarea.estado === estado;
      })

      return arrayFiltrado
      }

      

}

module.exports = archivoDeTareas;



