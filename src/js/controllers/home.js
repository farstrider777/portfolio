
function Home ($scope, $http, $state, $rootScope, $window, $location, $anchorScroll){
  console.log('hello i am the home contoller')

  $scope.ngSpacer = 'home-spacer-closed';
  $scope.expand = 'closed';
  $scope.showMenu = function(){
    // $scope.ngMenu = 'menu-open';

    if ($scope.ngMenu === 'menu-closed')
      $scope.ngMenu = 'menu-open';
    else
      $scope.ngMenu = 'menu-closed';

      if ($scope.expand === 'closed'){
        $scope.expand = 'open';
        console.log("hey from home controllers if expand state in home controller")
      }
      else{
        $scope.expand = 'closed';
      }



    // if ($scope.ngSpacer === 'home-spacer-closed'){
    //   $scope.ngSpacer = 'home-spacer-open';
    //   console.log('in')
    // }
    // else{
    //   $scope.ngSpacer= 'home-spacer-closed';
    // }

  };

  //$scope.expand = 'closed';
  $scope.arrowDirection = 'down';

  
  $scope.openShowRankerDes = function(){
  console.log("ran function openShowRankerDes in home controller")
    if ($scope.expand === 'closed'){
      $scope.expand = 'open';
      console.log("hey2")
    }
    else{
      $scope.expand = 'closed';
    }


    if ($scope.arrowDirection === 'down')
      $scope.arrowDirection = 'up';
    else
      $scope.arrowDirection = 'down';
  };
  $scope.expand2 = 'closed';
  $scope.arrowDirection2 = 'down';
  $scope.openWhackABugDes = function(){
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
