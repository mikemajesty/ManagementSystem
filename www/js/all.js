"use strict";!function(){angular.module("myapp",["ui.router"]).config(function($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("home"),$stateProvider.state("category",{url:"/category",templateUrl:"/public/html/category/category.html",controller:"CategoryController"})})}();
"use strict";!function(){angular.module("myapp").controller("CategoryController",["$scope",function($scope){$scope.teste=function(){}}])}();
"use strict";!function(){angular.module("myapp").controller("HomeController",["$scope",function($scope){console.log("hurray home")}])}();