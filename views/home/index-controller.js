(function() {
    angular.module('myapp').controller('HomeController',['$scope', '$http',
     function ($scope, $http) {
       $scope.getCategory = () => {
          $http.get('api/category/getCategory').then( (data) => {
            $scope.categories = data;
          }).catch((err) => {console.log('opa parça', err);});
       };
    }]);
}());
