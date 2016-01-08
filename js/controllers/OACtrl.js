/**
 * OACtrl Controller
 */

var oa = angular.module('MSDash');
oa.controller('OACtrl', function($scope) {
    $scope.templates = {
        home: 'templates/oa/oahome.html',
        user: 'templates/oa/oauser.html',
        leave: 'templates/oa/oaleave.html',
        ot: 'templates/oa/oaot.html'
    }

    $scope.showUser = function() {
        alert('show user')
    }
});