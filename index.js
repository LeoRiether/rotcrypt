(function ($) {
    'use strict';

    var rc = angular.module('rc', []);

    rc.controller('rcCtrl', function ($scope) {
        console.log('Initialized rcCtrl');
        $scope.hasPass = false;
        $scope.passPhase = 0;
        $scope.passerror = '';
        $scope.closeModal = function () {
            if ($scope.pass == 'illuminati') {
                $scope.passPhase = 1;
            } else if ($scope.passPhase == 1 && $scope.pass == 'confirmed') {
                $scope.hasPass = true;
            } 
            $scope.passerror = 'Senha incorreta';
        };
        $scope.result = '';
        $scope.chave = '';
        $scope.msg = '';
        $scope.crypt = function () {
            if (!$scope.hasPass) {
                $scope.result = 'Don\'t think you can beat me...';
            }   
        };
        $scope.uncrypt = function () {
            
        }
    });

})(document.querySelector.bind(document));
