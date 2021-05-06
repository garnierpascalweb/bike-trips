(function(ng) {'use strict'; //NOSONAR
ng.module('app')		    
    // le nom de l'outil, qui apparait en haut a gauche de la navbar
    .constant('BASE_PATH', "app/bike-trips/"),
    .constant('APPNAME', 'Bike Trips');
}(angular));