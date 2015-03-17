angular
.module('nyTimes')
.controller('SearchCtrl', SearchController)

function SearchController ($http, $scope) {

  $scope.getArticles = function(){
    console.log(makeUri($scope));
    $http.get(makeUri($scope))
    .success(function(data, status, headers, config){
      console.log('success with payload: ', data);
    })
    .error(function(data, status, headers, config){
      console.log('error in http get: ', data);
    });

  };
}

function makeUri($scope){
  var uri = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +
            getSearchterm($scope) + '&sort=oldest&hl=true&api-key=6cd1a3a57b7a2a3fb92ddc244a67580d:0:71602148'
  console.log(uri);
  return uri;
}

function getSearchterm($scope){
  console.log($scope.searchterm);
  //get the value of the input
  var searchTerm = $scope.searchterm;
  //clear the input
  $scope.searchterm = null;

  return searchTerm;
}
