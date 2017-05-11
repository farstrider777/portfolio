
function Menu ($scope, $http, $state, $rootScope, $window, $location, $anchorScroll){
  console.log('this is menu controller i am online')

  $scope.ngMenu = 'menu-closed';

  $scope.showMenu = function(){
    if ($scope.ngMenu === 'menu-closed'){
      $scope.ngMenu = 'menu-open';
      console.log("hey menu's if ngMenu statement in the menu contoller")
    }else{
      $scope.ngMenu = 'menu-closed';
    }

    if ($scope.ngSpacer === 'home-spacer-closed'){
      $scope.ngSpacer = 'home-spacer-open';
      console.log('in')
    }
    else{
      $scope.ngSpacer= 'home-spacer-closed';
    }
  };


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
}

Menu.$inject = ['$scope', '$http', '$state', '$rootScope', '$window', '$location', '$anchorScroll'];

export default Menu;
