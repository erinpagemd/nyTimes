angular
.module('nyTimes')
.controller('SearchCtrl', SearchController);

function SearchController ($scope) {
  console.log($scope);

  getSearchTerm($scope);
}

function getSearchTerm($scope){
  //get the value of the input
  var searchterm = $scope.searchterm;
  //clear the input
  $scope.searchterm = null;
  return searchterm;
}
