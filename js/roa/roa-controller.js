(function (ng) {
    'use strict'; //NOSONAR
    ng.module('test')
        .controller('RoaController', RoaController);
        RoaController.$inject = ['$log'];
    function RoaController($log) {
        var vm = this;
        vm.message="coucou RoaController";
    }
}(angular));