(function (ng) {
    'use strict'; //NOSONAR
    ng.module('roa')
        .service('RoaService', RoaService);
        RoaService.$inject = ['$log', '$http'];
    function RoaService($log, $http) {
        var service = {};        
        service.load = load;
        function load(){
            return $http.get('html/roa/roanne.json');
        }
        return service;
    }
}(angular));