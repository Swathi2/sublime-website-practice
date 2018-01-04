'use strict';
angular.module('sublimeApp')
.controller('buyCtrl', function ($scope) {
    var vm = this;
    $scope.hidelicenses = false;
    $scope.licenseKey = true;
    $scope.bsnssLicenseFunc = function () {
        $scope.hidelicenses = true;
        $scope.licenseKey = false;
    }
    $scope.selfLicenseFunc = function () {
        $scope.hidelicenses = false;
        $scope.licenseKey = true;
    }
})