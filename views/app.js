(function() {
  angular.module('myapp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

      $stateProvider.state('category', {
        url: 'category',
        templateUrl: '/public/html/home/index.html',
        controller: 'CategoryController'
      });

    });
}());
