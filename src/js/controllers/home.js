
function Home ($scope, $http, $state, $rootScope, $window, $location, $anchorScroll){
  $scope.goToAbout = function(){
    // $state.go('home')
    //$location.hash('about');
    $window.location.href = '#!/home#about';
    $anchorScroll();
  };
  $scope.goToPortfolio = function(){
    // $state.go('home')
    // $location.hash('portfolio');
    $window.location.href = '#!/home#portfolio';
    $anchorScroll();
  };
  $scope.goToContact = function(){
    // $state.go('home')
    // $location.hash('contact');
    $window.location.href = '#!/home#contact';
    $anchorScroll();
  };
}

Home.$inject = ['$scope', '$http', '$state', '$rootScope', '$window', '$location', '$anchorScroll'];

export default Home;
