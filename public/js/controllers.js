(function(){
    //Ahora cambiamos la variable app y asociamos los métodos directamente a nuestro modulo.
    angular.module('pokedex.controllers', [])
        .controller('PokedexController', ['$scope', '$http', function($scope, $http){
            $scope.pokemons = [];
            $http.get('/pokemons.json').success(function(data){
                $scope.pokemons = data;
            });
        }])
        //Ahora cambiamos ya al uso de $scope puesto que sin no no podemos usar la misma directiva de la misma manera en las dos vistas, en la de PokedexController y en la de PokemonController.
        //Ya no lo vinculamos a al controlador como this y tenemos que usar el controller y el alias en la vista, si no que tendremos el objeto en el $scope global que nos proporcional Angular.JS
        .controller('PokemonController', ['$scope',function($scope){
            $scope.pokemon = {
                id: "001",
                name: 'Bulbasaur',
                species : 'Seed Pokemon',
                type: ['Graas', 'Poison'],
                height: '2,4',
                weight: '15.2 lbs',
                abilities: ['Overgrow', 'Chlorophyll'],
                stats: {
                    hp: 45,
                    attack: 49,
                    defense: 49,
                    "sp.atk": 65,
                    "sp.def": 65,
                    speed: 45,
                    total: 318
                },
                evolution: [ "Bulbasaur", "Ivysaur", "Venusaur" ]

            };

        }])
        .controller('TabsController', function(){
            this.tab = 1;

            //Creamosn esta función que será llamada desde la directiva ng-click para seleccionar una u otra.
            this.selectTab = function(tab){
                this.tab = tab;
            };
        });


})();
