
function Home ($scope, $http, $state, $rootScope, $window, $location, $anchorScroll){
  $scope.goToAbout = function(){
    //$location.hash('about');
    $window.location.href = '#!/home#about';
    $anchorScroll();
  };
  $scope.goToPortfolio = function(){
    // $location.hash('portfolio');
    $window.location.href = '#!/home#portfolio';
    $anchorScroll();
  };
  $scope.goToInterviews = function(){
    // $location.hash('interviews');
    console.log("inside")
    $window.location.href = '#!/home#interviews';
    $anchorScroll();
  };
  $scope.goToContact = function(){
    // $location.hash('contact');
    $window.location.href = '#!/home#contact';
    $anchorScroll();
  };
}

Home.$inject = ['$scope', '$http', '$state', '$rootScope', '$window', '$location', '$anchorScroll'];

export default Home;
