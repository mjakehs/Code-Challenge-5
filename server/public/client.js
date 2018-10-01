const app = angular.module('ForumApp', []);

app.controller('ForumController', ['$http', function($http) {
    let vm = this;
    vm.message = 'angular is working';
}])