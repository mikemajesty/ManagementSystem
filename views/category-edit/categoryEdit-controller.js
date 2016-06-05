( (angular) => {
  'use strict';
  angular.module('myapp').controller('CategoryEditController',
    ['$scope', '$http', '$stateParams', '$state',
      ($scope, $http, $stateParams, $state) => {

        const id = $stateParams.id || false;
        if (id) {
          $http.get('api/category/get',{ params: { id }})
            .then((data) => {
              $scope.category = data.data;
            }).catch((err) => {console.log(err);})
        }

        $scope.submit = (category) => {
          $http.post('api/category/edit', category)
            .then((data) => {
              $state.go('category')
            }).catch((err) => {console.log(err);})

        };

    }]);
})(angular);
