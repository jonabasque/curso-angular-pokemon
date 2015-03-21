(function () {

  angular.module('pokedex.filters', [])
    //vamos a crear un filtro para reemplazar los simbolos por el caracter que tienen en la imagen.
    .filter('normalize', function(){
        return function(input){
            input = input
                .replace('♀', 'f')
                .replace('♂', 'm')
                .replace(/\W+/g, '');

            return input.toLowerCase();
        };
    })
    .filter('imageify', ['$filter', function ($filter) {
      return function (input) {
         //Ahora para no usar el fintro de normalize en las vistas, lo establecemos como dependencia del filtro de imageifly pasando el servicio $filter como dependencia
        var url = "img/pokemons/" + $filter('normalize')(input) + ".jpg"; //Este filtro nos devuelve la funcion de arriba, a la cual le pasamos la entrada y nos la devuelve sin signos y en minusculas.
        return url;
      };
    }]);

})();
