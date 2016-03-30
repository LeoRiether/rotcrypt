(function ($) {
    'use strict';

    var rc = angular.module('rc', []);

    rc.controller('rcCtrl', function ($scope) {
        $scope.hasPass = false;
        $scope.passPhase = 0;
        $scope.closeModal = function () {
            if ($scope.pass == 'illuminati') {
                $scope.passPhase = 1;
            } else if ($scope.passPhase == 1 && $scope.pass == 'confirmed') {
                $scope.hasPass = true;
            }
        };
    });

})(document.querySelector.bind(document));
