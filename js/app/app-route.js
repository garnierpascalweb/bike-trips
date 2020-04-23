(function(ng) {'use strict'; //NOSONAR
    ng.module('app')		
		// configuration dun Service de la librairie angular-ui-router
        .config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
            $stateProvider            
            .state('test', {
                //parent: 'depot-parent',
                url: '/test/',
                views:  {                  
                    content: {
                        templateUrl: 'html/test/test.html',
                        controller: 'TestController as vm'							 
                    }                  
                },
                url: '/roa/',
                views:  {                  
                    content: {
                        templateUrl: 'html/roa/roa.html',
                        controller: 'RoaController as vm'							 
                    }                  
                }                             
            });
            // route par dfaut, si / alors redirection vers /recherche
            $urlRouterProvider.otherwise('/roa/');
        }]);		
}(angular));