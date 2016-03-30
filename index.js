(function ($) {
    'use strict';

    var rc = angular.module('rc', []);

    rc.controller('rcCtrl', function ($scope, $root) {
        $scope.hasPass = false;
        $scope.passPhase = 0;
        $scope.passerror = '';
        $scope.closeModal = function () {
            if ($scope.pass == 'illuminati') {
                $scope.passPhase = 1;
            } else if ($scope.passPhase == 1 && $scope.pass == 'confirmed') {
                $root.hasPass = true;
            } 
            $scope.passerror = 'Senha incorreta';
        };
        $scope.chave = '';
        $scope.msg = '';
        $scope.crypt = function () {
            
        };
        $scope.uncrypt = function () {
            
        }
    });

})(document.querySelector.bind(document));
