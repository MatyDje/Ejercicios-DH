let arrayPelis = require("./movies");

const accion = process.argv[2];

let moviesDH =
{
    listaMovies: function () {
        arrayPelis.forEach((arrayDePeliculas) => {console.log(`${arrayDePeliculas.id} - ${arrayDePeliculas.title} - ${arrayDePeliculas.price}`)
        })
    },
    searchMovies: function (id) {
        let peli = arrayPelis.find(function(peli){
            return peli.id === id
        })
        return console.log(peli)
    },
    searchMoviesByGenre: function(genre){
        let pelis = arrayPelis.filter(function(peli){
            return peli.genre === genre
        })
        return console.log(pelis)
    },
    totalPrice: function () {
    let resultado = arrayPelis.reduce(function (acumulador, elemento) {
        return acumulador += elemento.price;
    }, 0)
    return console.log(resultado);
    },
    changeMovieGenre: function(id, nuevoGenre){
        let peli = this.searchMovies(id);

        peli.genre == nuevoGenre
        return peli
    }


}





//moviesDH.listaMovies();
//moviesDH.searchMovies("El hombre araña")
//moviesDH.searchMoviesByGenre('Ciencia ficción')
//moviesDH.totalPrice()
moviesDH.changeMovieGenre(3, "terror")