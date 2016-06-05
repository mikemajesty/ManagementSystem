((angular) => {
  'use sctrict'
  angular.module('myapp')
    .controller('CategoryCreateController', ['$scope', '$http', '$state', '$timeout', controller]);

     function controller($scope, $http , $state, $timeout) {

       $scope.submit = () => {
         const data = {
           name: $scope.category.name,
           descripition: $scope.category.descripition
         };

         $http.post('api/category/create', data)
          .then((data) => {
            
            $timeout(() => {
                  $state.go('category');
            },1000);

          }).catch((err) => {
            console.log('was error');
          });
       };



     }

})(angular);
