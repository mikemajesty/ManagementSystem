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

              //
              // $urlRouterProvider.otherwise('/home');
              //
              // $stateProvider.state('signUp', {
              //   url: '/signup',
              //   templateUrl: 'app/signup/signup.html',
              //   controller: 'SignUpController'
              // })
              // .state('editProfile', {
              //   url: '/edit-profile',
              //   templateUrl: 'app/profile/edit-profile-view.html',
              //   controller: 'EditProfileController'
              // })
              // .state('main', {
              //   url: '/home',
              //   templateUrl: 'app/main/main.html',
              //   controller: 'MainController'
              // });
          });
}());
