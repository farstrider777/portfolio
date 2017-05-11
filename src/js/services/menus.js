function AccountService ($http, SERVER, $cookies) {

let service = this;


  service.test = test;

  function test (a) {
    console.log(a)
  }

// service.signup = signup;
// service.login = login;
// service.addReview = addReview;
// service.getReviewsShow = getReviewsShow;

// function signup (user) {
//   return $http.post (`${SERVER}/users`, user);
// }
//
// function login (user) {
//   return $http.post (`${SERVER}/login`, user);
// }
//
//
// function addReview (data) {
//   return $http.post(`${SERVER}/reviews`, data, {
//     headers: getHeader()
//   });
// }
//
// function getReviewsShow (user) {
//   return $http.get (`${SERVER}/reviews`, user);
// }

}

AccountService.$inject = ['$http', 'SERVER', '$cookies']
export default AccountService;
