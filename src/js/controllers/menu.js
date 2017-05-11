
function Menu ($scope, $http, $state, $rootScope, $window, $location, $anchorScroll){
  console.log('this is menu controller i am online')
  // $scope.ngMenu = 'menu-closed';
  // $scope.ngSpacer = 'home-spacer-closed';
  // $scope.expand = 'closed';
  // $scope.showMenu = function(){
  //   // console.log('hello');
  //   // $scope.ngMenu = 'menu-open';
  //
  //   if ($scope.ngMenu === 'menu-closed')
  //     $scope.ngMenu = 'menu-open';
  //   else
  //     $scope.ngMenu = 'menu-closed';
  //
  //     if ($scope.expand === 'closed'){
  //       $scope.expand = 'open';
  //       console.log("hey")
  //     }
  //     else{
  //       $scope.expand = 'closed';
  //     }
  //
  //
  //
  //   // if ($scope.ngSpacer === 'home-spacer-closed'){
  //   //   $scope.ngSpacer = 'home-spacer-open';
  //   //   console.log('in')
  //   // }
  //   // else{
  //   //   $scope.ngSpacer= 'home-spacer-closed';
  //   // }
  //
  // };
  // $scope.goToAbout = function(){
  //   //$location.hash('about');
  //   $window.location.href = '#!/home#about';
  //   $anchorScroll();
  // };
  // $scope.goToPortfolio = function(){
  //   // $location.hash('portfolio');
  //   $window.location.href = '#!/home#portfolio';
  //   $anchorScroll();
  // };
  // $scope.goToInterviews = function(){
  //   // $location.hash('interviews');
  //   $window.location.href = '#!/home#interviews';
  //   $anchorScroll();
  // };
  // $scope.goToContact = function(){
  //   // $location.hash('contact');
  //   $window.location.href = '#!/home#contact';
  //   $anchorScroll();
  // };
  // //$scope.expand = 'closed';
  // $scope.arrowDirection = 'down';
  // $scope.openShowRankerDes = function(){
  //   // if ($scope.expand === 'closed')
  //   //   $scope.expand = 'open';
  //   // else
  //   //   $scope.expand = 'closed';
  //   if ($scope.expand === 'closed'){
  //     $scope.expand = 'open';
  //     console.log("hey2")
  //   }
  //   else{
  //     $scope.expand = 'closed';
  //   }
  //
  //
  //   if ($scope.arrowDirection === 'down')
  //     $scope.arrowDirection = 'up';
  //   else
  //     $scope.arrowDirection = 'down';
  // };
  // $scope.expand2 = 'closed';
  // $scope.arrowDirection2 = 'down';
  // $scope.openWhackABugDes = function(){
  //   if ($scope.expand2 === 'closed')
  //     $scope.expand2 = 'open';
  //   else
  //     $scope.expand2 = 'closed';
  //
  //   if ($scope.arrowDirection2 === 'down')
  //     $scope.arrowDirection2 = 'up';
  //   else
  //     $scope.arrowDirection2 = 'down';
  // };
  // $scope.expand3 = 'closed';
  // $scope.arrowDirection3 = 'down';
  // $scope.openEtsyDes = function(){
  //   if ($scope.expand3 === 'closed')
  //     $scope.expand3 = 'open';
  //   else
  //     $scope.expand3 = 'closed';
  //
  //   if ($scope.arrowDirection3 === 'down')
  //     $scope.arrowDirection3 = 'up';
  //   else
  //     $scope.arrowDirection3 = 'down';
  // };


}

Menu.$inject = ['$scope', '$http', '$state', '$rootScope', '$window', '$location', '$anchorScroll'];

export default Menu;
