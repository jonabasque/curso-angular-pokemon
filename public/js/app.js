(function(){
    //Declaramos una variable con un modulo como primer parametro y un array con las dependencias como segundo.
    var app = angular.module('pokedex',
        ['pokedex.controllers',
         'pokedex.directives',
         'pokedex.filters']);

})();
