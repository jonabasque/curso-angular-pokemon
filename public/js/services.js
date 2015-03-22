(function(){

    angular.module('pokedex.services', [])
        //Ahora inyectamos el servicio de filtros para poder usar el normalize que hemos creado
        .factory('pokemonService', ['$http', '$q', '$filter', function($http, $q, $filter){
            var normalize = $filter('normalize'); //guardamos el filtro en una variable

            function all(){
                var deferred = $q.defer();

                $http.get('/pokemons.json')
                    .success(function(data){
                        deferred.resolve(data);
                    });

                return deferred.promise;
            };


            function byName(name){
                // Primero normalizamos el nombre del pokemon.
                name = normalize(name);

                var deferred = $q.defer();

                //ahora tenemos que recorrer todos los nombres de los pokemones para devolver el que me piden despues de normalizar el nombre.
                //para ello no hacemos otra peticio si no que usamos el metodo all() que hemos creado antes.
                all().then(function(data){
                    //el data que nos devuelve es un arry de JS que tenemos que filtrar con una funcion de JS que se llama filter. Este no es de Angular si no de JS nativo, que va a iterar por cada uno de los elementos del arry y va a ejecutar esta funcion, si devuelve true se va a guardar el valor si es false no.
                    var results = data.filter(function(){
                        // Tenemos que comparalo ya normalizado si no no encontrará igualdad.
                        return normalize(pokemon.name) === name ;
                    });


                    if(results.length > 0) {
                        deferred.resolve(results[0]);
                    }else{
                        deferred.reject();
                    };
                });

            };


            return {
                all : all,
                byName : byName
            }
        }]);

})();
