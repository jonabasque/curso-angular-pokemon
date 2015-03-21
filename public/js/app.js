(function(){
    //Declaramos una variable con un modulo como primer parametro y un array con las dependencias como segundo.
    var app = angular.module('pokedex',
        //añadimos el módulo ngRoute a las dependencias del modulo principal de nuestra aplicación.
        ['ngRoute',
         'pokedex.controllers',
         'pokedex.directives',
         'pokedex.filters'
        ]
    );

    // hacemos la configuración del servicio que nos provee el modulo ngRoute con el objeto $routeProvider el cual es un servicio de tipo provider que hay que configurar antes de poder ser usado.
    app.config(['$routeProvider', function($routeProvider){

        //El metodo when me va a hacer mach con la ruta. Y cuando recibe una petición a dicha ruta ejecuta dicho controlador y se mostrara la ruta
        $routeProvider
            .when('/', {
                //En esta ruta nos mostrara el listado de Pokemons, es la vista principal de la aplicacion
                templateUrl: 'views/pokedex.html',
                controller: 'PokedexController'
            })
            .when('/pokemon/:id', {
                //de esta manera estamos inyectando solo el archivo htm...
                templateUrl: 'views/pokemon.html',
                //ahora le inyectamos el contrlador, ahora estamos usando Ajax, vamos a ver después como evitarlo.
                controller: 'PokemonController'
            })
            .otherwise({
                //Si se escribe cualquier otra ruta nos redirige a la ruta principal
                redirectTo: '/'
            });

    }]);

})();
