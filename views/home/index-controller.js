(function() {
    angular.module('myapp').controller('HomeController',['$scope', '$http',
     function ($scope, $http) {
       
       $scope.getCategory = () => {
          $http.get('api/category/findAll').then( (data) => {
            $scope.categories = data;
          }).catch((err) => {console.log('opa parça', err);});
       };

       $scope.create = () => {
          let category = {
            name: $scope.name || null,
            descripition: $scope.descripition || null
          }
          $http.post('api/category/create', category).then( (data) => {
            console.log('created', data);
          }).catch((err) => {console.log('opa parça', err);});
       };
    }]);
}());
