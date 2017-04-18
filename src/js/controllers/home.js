
function Home ($scope, $http, $state, $rootScope, $window, $location, $anchorScroll){
  $scope.goToAbout = function(){
    console.log("hey")
    $location.hash('about');
    $anchorScroll();
  };
  $scope.goToPortfolio = function(){
    $location.hash('portfolio');
    $anchorScroll();
  };
  $scope.goToContact = function(){
    $location.hash('contact');
    $anchorScroll();
  };
}

Home.$inject = ['$scope', '$http', '$state', '$rootScope', '$window', '$location', '$anchorScroll'];

export default Home;
