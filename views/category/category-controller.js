( (angular) => {
  'use strict';
  angular.module('myapp').controller('CategoryController',
    ['$scope', '$http', '$state',
      ($scope, $http, $state) => {


        $scope.getCategory = () => {
          $http.get('api/category/findAll').then( (data) => {
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
          console.log('sera?');
            $state.go('category-edit',{id});
        };

        $scope.getCategory();
    }]);
})(angular);
