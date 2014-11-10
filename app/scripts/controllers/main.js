'use strict';

/**
 * @ngdoc function
 * @name dakaneyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dakaneyApp
 */
angular.module('dakaneyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = ' ';
    };
    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1);
    };
  });
