
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
    $window.location.href = '#!/home#interviews';
    $anchorScroll();
  };
  $scope.goToContact = function(){
    // $location.hash('contact');
    $window.location.href = '#!/home#contact';
    $anchorScroll();
  };
  $scope.expand = 'closed';
  $scope.arrowDirection = 'down';
  $scope.openShowRankerDes = function(){
    if ($scope.expand === 'closed')
      $scope.expand = 'open';
    else
      $scope.expand = 'closed';

    if ($scope.arrowDirection === 'down')
      $scope.arrowDirection = 'up';
    else
      $scope.arrowDirection = 'down';
  };
  $scope.expand2 = 'closed';
  $scope.arrowDirection2 = 'down';
  $scope.openWhackABugDes = function(){
    console.log("test2")
    if ($scope.expand2 === 'closed')
      $scope.expand2 = 'open';
    else
      $scope.expand2 = 'closed';

    if ($scope.arrowDirection2 === 'down')
      $scope.arrowDirection2 = 'up';
    else
      $scope.arrowDirection2 = 'down';
  };
  $scope.expand3 = 'closed';
  $scope.arrowDirection3 = 'down';
  $scope.openEtsyDes = function(){
    if ($scope.expand3 === 'closed')
      $scope.expand3 = 'open';
    else
      $scope.expand3 = 'closed';

    if ($scope.arrowDirection3 === 'down')
      $scope.arrowDirection3 = 'up';
    else
      $scope.arrowDirection3 = 'down';
  };


}

Home.$inject = ['$scope', '$http', '$state', '$rootScope', '$window', '$location', '$anchorScroll'];

export default Home;
