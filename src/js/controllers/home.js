
function Home ($scope, $http, $state, $rootScope){
  console.log('hello');
  $scope.test = function(){
    console.log('hellofromclick')
  }
}

Home.$inject = ['$scope', '$http', '$state', '$rootScope'];

export default Home;
