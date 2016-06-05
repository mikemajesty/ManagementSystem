((angular) => {
  'use sctrict'
  angular.module('myapp')
    .controller('CategoryCreateController', ['$scope', '$http', '$location', '$timeout', controller]);

     function controller($scope, $http , $location, $timeout) {

       $scope.submit = () => {
         const data = {
           name: $scope.category.name,
           descripition: $scope.category.descripition
         };

         $http.post('api/category/create', data)
          .then((data) => {

          $timeout(() => {
            $location.path('category');
          },1000);

          }).catch((err) => {
            console.log('was error');
          });
       };



     }

})(angular);
