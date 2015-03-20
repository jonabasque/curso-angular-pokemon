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
    .filter('imageify', function () {
      return function (input) {
        var url = "img/pokemons/" + input.toLowerCase() + ".jpg";
        return url;
      };
    });

})();
