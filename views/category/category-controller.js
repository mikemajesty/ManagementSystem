( (angular) => {
  'use strict';
  angular.module('myapp').controller('CategoryController',
    ['$scope', '$http', '$location',
      ($scope, $http, $location) => {


        $scope.getCategory = () => {
          $http.get('api/category/findAll').then( (data) => {
            console.log('categories::', data);
            $scope.categories = data.data;
          }).catch((err) => {console.log('opa parça', err);});
        };

        $scope.delete = (id) => {
          $http.post('api/category/delete', {id})
            .then((data) => {
              $scope.categories = data.data;
            }).catch((err) => {
              console.log(err);
            });
        };

        $scope.edit = (id) => {
          $location.path('category-edit');
        };

        $scope.getCategory();
    }]);
})(angular);
