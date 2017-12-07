"use strict";

// Declare app level module which depends on views, and components
angular.module("myApp", ["ngRoute", "redlineDirective", "Api"]).config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider.otherwise({ redirectTo: "/view1" });
  }
]);
