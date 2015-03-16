(function(){

    angular.module('pokedex.directives', [])
        .directive('pokemonData', function(){

            return {
                //Hay varios tipos de directivas, está será de tipo elemento.
                restrict: 'E',
                templateUrl: 'partials/pokemon-data.html'
            }
        })
        .directive('pokemonImage', function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/pokemon-image.html'
            };
        })
        .directive('pokemonName', function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/pokemon-name.html'
            };
        })
        .directive('pokemonStats', function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/pokemon-stats.html'
            };
        })
        .directive('pokemonEvolution', function () {
            return {
                retrict: 'E',
                templateUrl: 'partials/pokemon-evolution.html'
            };
        })
        .directive('pokemonComments', function () {
            return {
                retrict: 'E',
                templateUrl: 'partials/pokemon-comments.html',
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
}();
