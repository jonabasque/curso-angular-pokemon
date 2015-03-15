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

    //Creamos el controladro de comentarios
    app.controller('ComentsController', function(){
        this.comments = [];
        this.show = false; //para mostrar o no el panel.
        //Aqui tendremos el último comentario.
        this.comment = {};

        //cada vez que ejecutemos este método invertiremos el estado de show
        this.toogle = function(){
            this.show = !this.show;
        };

        //llamaremos a este método cada dez que se marque el checkbox, gracias a la directiva ng-change
        this.anonymousChanged = function(){
            //Si nuestro checkbox está a true...
            if(this.comment.anonymous){
                //cambiamos el valor del campo email a cadena vacia.
                this.comment.email = "";
            }
        };

        //Este es el metodo que ejecutarems cuando envien el formulario de comentario.
        this.addComment = function(){

            //Le agregamos a comment el atributo date con la fecha actual.
            this.comment.date = Date.now();
            //Le agregamos el comentario que nos pasan a el array de comentarios en ultima poisicion.
            this.comments.push(this.comment);
            //Después de insertar el comentario limpiamos el actual.
            this.comment = {};
        }

    });

    //Exportamos también una directiva en nuestro modulo. El primer argumento es el nombre de la misma y el segundo es la funcion qe se ejecuta en la misma.
    app.directive('pokemonData', function(){

        return {
            //Hay varios tipos de directivas, está será de tipo elemento.
            restrict: 'E',
            templateUrl: 'partials/pokemon-data.html'
        }
    })


})();
