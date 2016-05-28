(function () {
  angular.module('myapp')
    .controller('CategoryController', ['$scope', '$http', function($scope, $http) {
       $scope.getCategory = () => {
         console.log('passou');
          $http.get('api/category/getCategory').then( (data) => {
            $scope.categories = data.data;
          }).catch((err) => {console.log(err);});
       };
    }]);
}());
