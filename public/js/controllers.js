(function(){
    //Ahora cambiamos la variable app y asociamos los métodos directamente a nuestro modulo.
    angular.module('pokedex.controllers', [])
        //Despues de crear nuestro modulo Service de tipo factory para hacer la peticion http ya no necesitamos usar el servicio $http de AngularJS, ahora usamos nuestro propio servicio.
        .controller('PokedexController', ['$scope', '$routeParams', 'pokemonService', function($scope, $routeParams,pokemonService){
            //Ahora para mostrar mediante este controllador todos los pokemons o solo los de un tipo, tenemos que usar el service $routeParams para recoger el paramentro pasado.
            // Si existe el paramentro llamamos a un metodo y si no a otro.
            $scope.pokemons = [];
            var type = $routeParams.type;
            if(type){
                $scope.type = type;
                //Ejecutamos el metodo y como nos entrega una promesa, vamos a tratarla.
                pokemonService.byType(type).then(function(data){
                    $scope.pokemons = data;
                });

            }else{

                //Este método nos retorna una promesa y nos dira si se cumple y nos va poder entregar los datos o si njos va a fallar. entonces si .then se comple recibimos los datos que ejecutamos dentro de la función callaback del propio metodo.
                pokemonService.all().then(function(data){
                    $scope.pokemons = data; //Con esto ya tenemos obtenida la logica de la vista de pokemon
                });

            }



        }])
        //Ahora cambiamos ya al uso de $scope puesto que sin no no podemos usar la misma directiva de la misma manera en las dos vistas, en la de PokedexController y en la de PokemonController.
        //Ya no lo vinculamos a al controlador como this y tenemos que usar el controller y el alias en la vista, si no que tendremos el objeto en el $scope global que nos proporcional Angular.JS
        .controller('PokemonController', ['$scope', '$routeParams', 'pokemonService', function($scope, $routeParams, pokemonService){
            //Añadimos el servicio de Angular $routeParams para recoger los parametros que nos pasan por URL.
            var nombre = $routeParams.name; //En atributo name de $routeParams sera el que hemos pasado en la ruta.
            $scope.pokemon = {};

            pokemonService.byName(nombre)
                .then(function(data){
                    $scope.pokemon = data;
                });

        }])
        .controller('TabsController', function(){
            this.tab = 1;

            //Creamosn esta función que será llamada desde la directiva ng-click para seleccionar una u otra.
            this.selectTab = function(tab){
                this.tab = tab;
            };
        });


})();
