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

        //EL MISMO CONTROLADOR PUEDE CONTENER OTRO OBJETO CREADO AQUI??
    });

    //Creamos otro controlador
    app.controller('TabsController', function(){
        this.tab = 1;

        //Creamosn esta función que será llamada desde la directiva ng-click para seleccionar una u otra.
        this.selectTab = function(tab){
            this.tab = tab;
        };
    });

    //Exportamos también una directiva en nuestro modulo. El primer argumento es el nombre de la misma y el segundo es la funcion qe se ejecuta en la misma.
    app.directive('pokemonData', function(){

        return {
            //Hay varios tipos de directivas, está será de tipo elemento.
            restrict: 'E',
            templateUrl: 'partials/pokemon-data.html'
        }
    });

    //Creamos el resto de directivas para incluir elementos de la pagina concretos desde partials
    app.directive('pokemonImage', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-image.html'
        };
    });

    app.directive('pokemonName', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-name.html'
        };
    });

    app.directive('pokemonStats', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-stats.html'
        };
    });

    app.directive('pokemonEvolution', function () {
        return {
            retrict: 'E',
            templateUrl: 'partials/pokemon-evolution.html'
        };
    });

    app.directive('pokemonComments', function () {
        return {
            retrict: 'E',
            templateUrl: 'partials/pokemon-comments.html',
            //Agregamos la propiedad controller, que recibe una funcion que contiene toda la logica del controlador, es decir podemos trasladar el contenido de la funcion del controlador anterior y pegarlo aqui.Y esta directiva no solo tiene una llamada al contenido visual si no que tambien incluye un controlador.
            controller: function () {
              this.comments = [];
              this.comment = {};
              this.show = false;

              this.toggle = function () {
                this.show = !this.show;
              };

              this.anonymousChanged = function () {
                if (this.comment.anonymous) {
                  this.comment.email = "";
                }
              };

              this.addComment = function () {
                this.comment.date = Date.now();
                this.comments.push(this.comment);
                this.comment = {};
              };
            },
            controllerAs: 'cmtsCtrl'
        };
    });

})();
