(function(){
    //Declaramos una variable con un modulo como primer parametro y un array con las dependencias como segundo.
    var app = angular.module('pokedex', []);

    app.controller('PokemonController', function(){

        this.pokemon = {
            id: 001,
            name: 'bulbasaur',
            species : 'Seed Pokemon',
            type: ['Graas', 'Poison'],
            height: '2,4',
            widht: '15.2 lbs',
            abilities: ['Overgrow', 'Chlorophyll']

        };
    });
})();
