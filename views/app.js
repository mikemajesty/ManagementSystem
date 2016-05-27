(function() {
  angular.module('myapp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('home');

      $stateProvider.state('category', {
        url: '/category',
        templateUrl: '/public/html/category/category.html',
        controller: 'CategoryController'
      });

    });
}());
