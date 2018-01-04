'use strict';
angular.module('sublimeApp')
.controller('newsCtrl', function ($scope, $http) {
    var vm = this;
    $http.get('newsData.json')
    .then(function (res) {
        $scope.list = res.data;
    });
})