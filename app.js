angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';

  $scope.posts = [
    {title: '1', upvotes: 5},
    {title: '2', upvotes: 2},
    {title: '3', upvotes: 15},
    {title: '4', upvotes: 9},
    {title: '5', upvotes: 4}
  ];

  $scope.addPost = function(){
    $scope.posts.push({title: $scope.title, upvotes: 0});
    $scope.title = '';
  };
}]);
