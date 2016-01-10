/**
 * OACtrl Controller
 */

var oa = angular.module('MSDash');
oa.controller('AdminCtrl', function($scope, $http, $uibModal) {

    $scope.isManage = false;

    $http.get('data/user.json').success(function(data) {
        $scope.users = data;
        $scope.user = data[0];
    })

    $scope.showUser = function(user) {
        $scope.user = user;
    }

    $scope.removeUser = function(user) {
        console.log(user);
    }

    $scope.editUser = function(user) {
        $scope.userStats = {
            statuses: ['Active', 'Inactive']
        }
        $scope.isManage = !$scope.isManage;
    }

    $scope.okUser = function(user) {
        console.log(user);
        $scope.isManage = !$scope.isManage;
    }
    $scope.cancelUser = function() {
        $scope.isManage = !$scope.isManage;
    }
    //$scope.manageUser = function(user) {
    //
    //    var modalInstance = $uibModal.open({
    //        animation: false,
    //        templateUrl: 'templates/oa/user.html',
    //        controller: 'UserCtrl',
    //        size: 'md',
    //        resolve: {
    //            user: function() {
    //                return user;
    //            }
    //        }
    //    });
    //    modalInstance.result.then(function (data) {
    //        $scope.user=data;
    //        // update user
    //
    //    }, function () {
    //        //$log.info('Modal dismissed at: ' + new Date());
    //    });
    //}

});

//oa.controller('UserCtrl', function($scope, $uibModalInstance, user) {
//
//    $scope.userStats = {
//        statuses: ['Active', 'Inactive']
//    }
//    $scope.user = user;
//
//    $scope.ok = function() {
//        $uibModalInstance.close($scope.user);
//    }
//    $scope.cancel = function () {
//        $uibModalInstance.dismiss('cancel');
//    };
//});