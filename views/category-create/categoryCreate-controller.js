((angular) => {
  'use sctrict'
  angular.module('myapp')
    .controller('CategoryCreateController', ['$scope', '$http', '$location', controller]);

     function controller($scope, $http , $location) {

       $scope.submit = () => {
         const data = {
           name: $scope.category.name,
           descripition: $scope.category.descripition
         };
         
         $http.post('api/category/create', data)
          .then((data) => {
            $location.path('category');
          }).catch((err) => {
            console.log('was error');
          });
       };



     }

})(angular);
