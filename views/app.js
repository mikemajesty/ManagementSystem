(function() {
  angular.module('myapp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('home');

      $stateProvider.state('category', {
        url: '/category',
        templateUrl: '/public/html/category/category.html',
        controller: 'CategoryController'
      }).state('category-create', {
        url: '/category-create/:id?',
        templateUrl: '/public/html/category-create/category-create.html',
        controller: 'CategoryCreateController'
      }).state('category-edit', {
        url: '/category-edit/:id',
        templateUrl: '/public/html/category-create/category-edit.html',
        controller: 'CategoryEditController'
      });

    });
}());
