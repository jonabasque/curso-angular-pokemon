(function(){
    //Ahora cambiamos la variable app y asociamos los métodos directamente a nuestro modulo.
    angular.module('pokedex.controllers', [])
        .controller('PokedexController', ['$scope', '$http', function($scope, $http){
            $scope.pokemons = [];
            $http.get('/pokemons.json').success(function(data){
                $scope.pokemons = data;
            });
        }])
        .controller('PokemonController', function(){
            this.pokemon = {
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

        })
        .controller('TabsController', function(){
            this.tab = 1;

            //Creamosn esta función que será llamada desde la directiva ng-click para seleccionar una u otra.
            this.selectTab = function(tab){
                this.tab = tab;
            };
        });


})();
