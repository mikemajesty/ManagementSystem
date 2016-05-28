(function () {
  angular.module('myapp')
    .controller('CategoryController', ['$scope', '$http', function($scope, $http) {
       $scope.getCategory = () => {
         console.log('passou');
          $http.get('api/category/getCategory').then( (data) => {
            console.log('success', data);
          }).catch((err) => {console.log(err);});
       };
    }]);
}());
