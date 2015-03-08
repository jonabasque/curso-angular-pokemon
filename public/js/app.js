(function(){
    //Declaramos una variable con un modulo como primer parametro y un array con las dependencias como segundo.
    var app = angular.module('pokedex', []);

    //declaramos el controlador del mñódulo
    app.controller('PokemonController', function(){
        //El controlador tendrá acceso a un objeto llamado pokemon
        this.pokemon = {
            id: 001,
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
    });
})();
