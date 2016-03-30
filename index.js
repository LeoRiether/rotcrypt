(function ($) {
    'use strict';

    function toc (c) {
        return c.charCodeAt(0);
    }
    function fromc (i) {
        return String.fromCharCode(i);
    }

    var RotCrypt = {
        rots: [],
        min: toc('a'),
        max: toc('z')+1,
        init: function () {
            var delta = RotCrypt.max-RotCrypt.min,
                ta;
            for (var i = 0; i < delta; i++) {
                ta = [];
                for (var l = RotCrypt.min; l < RotCrypt.max; l++) {
                    //ta.push(l-i<RotCrypt.min?l-i+delta:l-i);
                    ta.push(l+i>RotCrypt.max?l+i-delta:l+i);
                }
                RotCrypt.rots.push(ta);
            }
            //RotCrypt.rots.reverse();
        },

        go: function (pass, text) {
            pass = pass.toLowerCase().replace(/[^a-z]/g, '');
            text = text.toLowerCase();
            var rc = '';
            for (var i = 0; i < text.length; i++) {
                if(text[i] == ' ') {
                    rc += ' ';
                    continue;
                }
                rc += fromc(RotCrypt.rots
                    [toc(pass[i%pass.length])-RotCrypt.min]
                    [toc(text[i])-RotCrypt.min]
                );
            }
            return rc;
        },

        back: function (pass, rc) {
            pass = pass.toLowerCase().replace(/[^a-z]/g, '');
            rc = rc.toLowerCase();
            var text = '';
            for (var i = 0; i < rc.length; i++) {
                if(rc[i] == ' ') {
                    text += ' ';
                    continue;
                }
                text += fromc(RotCrypt.keyfval(pass, rc, i)+RotCrypt.min);
            }
            return text;
        },

        keyfval: function (pass, rc, i) {
            for (var j = 0; j < RotCrypt.rots.length; j++){
                if (fromc(RotCrypt.rots[toc(pass[i%pass.length])-RotCrypt.min][j]) == rc[i]) {
                    return j;
                }
            }
            console.log('Nope', rc[i]);
            return null;
        }
    };

    var rc = angular.module('rc', []);

    rc.controller('rcCtrl', function ($scope) {
        console.log('Initialized rcCtrl');
        RotCrypt.init();
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
            $scope.pass = '';
        };
        $scope.result = '';
        $scope.chave = '';
        $scope.msg = '';
        $scope.crypt = function () {
            var a = RotCrypt.go($scope.chave, $scope.msg);
            console.log(a);
        };
        $scope.uncrypt = function () {
            var a = RotCrypt.back($scope.chave, $scope.msg);
            console.log(a);
        };
    });

})(document.querySelector.bind(document));
