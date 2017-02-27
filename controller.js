angular
  .controller('twitterFeedCtrl', loadFunction);

loadFunction.$inject = ['$http','$scope', 'structureService', '$location', '$rootScope'];

function loadFunction($http, $scope, structureService, $location, $rootScope){

  structureService.registerModule($location,$scope,"twitterfeed");

  $scope.urlToEmbed = $scope.twitterfeed.modulescope.urlToEmbed;

  setTimeout(function () {
    structureService.launchSpinner('.transitionloader');
  }, 100);
}
