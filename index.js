(function ($) {
    'use strict';

    var rc = angular.module('rc', []);

    rc.run(function ($root) {
        $root.hasPass = false;
    })

    rc.controller('passCtrl', function ($scope, $root) {
        $scope.phase = 0;
        $scope.closeModal = function () {
            if ($scope.pass == 'illuminati') {
                $scope.phase = 1;
            } else if ($scope.phase == 1 && $scope.pass == 'confirmed') {
                $root.hasPass = true;
            }
        };
    });

    rc.controller('rcCtrl', function ($scope, $root) {
        $scope.chave = '';
        $scope.msg = '';
        $scope.crypt = function () {
            
        };
        $scope.uncrypt = function () {
            
        }
    });

})(document.querySelector.bind(document));
