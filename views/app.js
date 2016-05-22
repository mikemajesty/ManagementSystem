(function() {
  angular.module('myapp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

      $stateProvider.state('category', {
        url: 'category',
        templateUrl: 'views/category/category.jade',
        controller: 'CategoryController'
      });

    });
}());
