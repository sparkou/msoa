
var oa = angular.module('MSDash', ['ui.bootstrap', 'ui.router', 'ngCookies']);

oa.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('oa', {
                url: '/oa',
                templateUrl: 'templates/oa/oa.html',
                controller: 'OACtrl'
            })
            .state('meeting', {
                url: '/meeting',
                templateUrl: 'templates/meeting/meeting.html',
                controller: ''
            })

    }
]);