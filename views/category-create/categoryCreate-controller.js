((angular) => {
  'use sctrict'
  angular.module('myapp')
    .controller('CategoryCreateController', ['$scope', '$http', controller]);

     function controller($scope, $http) {

       $scope.submit = () => {
         const data = {
           name: $scope.category.name,
           descripition: $scope.category.descripition
         };
         console.log(data);
         $http.post('api/category/create', data)
          .then((data) => {
            console.log('was saved');
          }).catch((err) => {
            console.log('was error');
          });
       };



     }

})(angular);
