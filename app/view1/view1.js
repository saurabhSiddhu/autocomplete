"use strict";

angular
  .module("myApp.view1", ["ngRoute"])

  .config([
    "$routeProvider",
    "$httpProvider",
    function($routeProvider, $httpProvider) {
      $httpProvider.defaults.headers.post.ApiKey = "KBQ7tV7Y43";
      $routeProvider.when("/view1", {
        templateUrl: "view1/view1.html",
        controller: "View1Ctrl"
      });
    }
  ])

  .controller("View1Ctrl", [
    "$scope",
    "$http",
    function($scope, $http) {
      $scope.getLocation = function(val) {
        return $http
          .post("https://apiv2test.sirved.com/apps/getSearchSuggestions", {
            search: val,
            distance: "50km",
            province: "Ontario",
            city: "Windsor"
          })
          .then(function(response) {
            return response.data;
          });
      };
    }
  ]);
