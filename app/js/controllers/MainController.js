app.controller('MainController', ['$scope', 'movies', function($scope, movies) {
  movies.success(function(data) {
    $scope.movieList = data;
  });
}]);
