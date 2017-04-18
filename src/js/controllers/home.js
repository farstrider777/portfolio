
function Home ($scope, $http, $state, $rootScope, $window, $location, $anchorScroll){
  $scope.goToAbout = function(){
    //$window.location()
    $window.location.href = '#!/home#about';
    // $state.go('home')
    // $location.hash('about');
    // $anchorScroll();
  };
  $scope.goToPortfolio = function(){
    // $state.go('home')
    // $location.hash('portfolio');
    // $anchorScroll();
    $window.location.href = '#!/home#portfolio';
  };
  $scope.goToContact = function(){
    // $state.go('home')
    // $location.hash('contact');
    // $anchorScroll();
    $window.location.href = '#!/home#contact';
  };
}

Home.$inject = ['$scope', '$http', '$state', '$rootScope', '$window', '$location', '$anchorScroll'];

export default Home;
