/**
 * OACtrl Controller
 */

var oa = angular.module('MSDash');
oa.controller('OACtrl', function($scope, $http) {
    $scope.templates = {
        home: 'templates/oa/oahome.html',
        user: 'templates/oa/oauser.html',
        leave: 'templates/oa/oaleave.html',
        ot: 'templates/oa/oaot.html'
    }

    $http.get('data/user.json').success(function(data) {
        $scope.user = data[0];
    })

    $scope.isUserManage = false;
    $scope.manageUser = function() {
        $scope.isUserManage = !$scope.isUserManage;
    }

    $scope.okUser = function(user) {
        $scope.user = user;
        $scope.isUserManage = !$scope.isUserManage;
    }
    $scope.cancelUser = function() {
        $scope.isUserManage = !$scope.isUserManage;
    }

    $scope.showUser = function() {
        alert('show user')
    }
});

