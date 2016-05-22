(function() {
  angular.module('myapp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

      $stateProvider.state('index', {
        url: '/',
        templateUrl: 'views/menu/menu',
        controller: 'MenuController'
      }).state('category', {
        url: 'category',
        templateUrl: 'views/category/category.jade',
        controller: 'CategoryController'
      });

    });
}());
