(function (ng) {
    'use strict'; //NOSONAR
    ng.module('test')
        .controller('RoaController', RoaController);
        RoaController.$inject = ['$log', 'RoaService'];
    function RoaController($log, RoaService) {
        var vm = this;
        vm.message="coucou RoaController";
        vm.datas = {};
        var promise = RoaService.load();
        promise.then(function(res){
            vm.trip = res.data;  
            $log.info("loaded " + res);
          });
    }
}(angular));