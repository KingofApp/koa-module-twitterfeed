angular
  .controller('twitterFeedCtrl', loadFunction);

loadFunction.$inject = ['$http','$scope', 'structureService', '$location', '$rootScope'];

function loadFunction($http, $scope, structureService, $location, $rootScope){
  //Register upper level modules
  structureService.registerModule($location,$scope,"twitterfeed");
  setTimeout(function () {
    structureService.launchSpinner('.transitionloader');
  }, 100);
}
