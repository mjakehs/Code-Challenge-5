const app = angular.module('ForumApp', []);

app.controller('ForumController', ['$http', function($http) {
    let vm = this;
    vm.message = 'angular is working';
    vm.messages = [];
    vm.newMessage = {};

    vm.postMessage = function(message) {
        $http({
            method: 'POST',
            url: '/messages',
            data: message
        })
        .then( function(){
            vm.getMessages();
        })
        .catch( function(err){
            alert('Error posting message');
        })
    }
    vm.getMessages = function () {
        $http({
            method: 'GET',
            url: '/messages'
        })
        .then( function(response){
            vm.messages = response.data;
        })
        .catch( function(err){
            alert('Error getting message');
        })
    }

}])