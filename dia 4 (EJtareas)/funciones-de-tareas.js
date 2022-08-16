const fs = require("fs");
let archivoDeTareas = {
   nombreDeArchivo: "tareas.json",
   leerArchivo: function () {
      let tareas = fs.readFileSync(this.nombreDeArchivo, "utf-8");
      return JSON.parse(tareas);
   }
}

module.exports = archivoDeTareas;

