(function() {
    angular.module('myapp').controller('HomeController',['$scope', '$http',
     function ($scope, $http) {
       $scope.getCategory = () => {
          $http.get('api/category/getCategory').then( (data) => {
            $scope.categories = data;
          }).catch((err) => {console.log('opa parça', err);});
       };

       $scope.create = (entity) => {
          const category = {
            name: 'mike lima',
            descripition: 'hurray'
            // name: entity.name || null,
            // descripition: entity.descripition || null
          }
          $http.post('api/category/create', category).then( (data) => {
            console.log('create', data);
          }).catch((err) => {console.log('opa parça', err);});
       };
    }]);
}());
