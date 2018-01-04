'use strict';
angular.module('sublimeApp')
.controller('headerCtrl', function ($scope, $location) {
    var vm = this;
    vm.navigate = function (name) {
        $location.path(name);
    };
})