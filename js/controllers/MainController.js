app.controller('MainController', ['$scope', 'movies', function($scope, movies) {
  $scope.title = 'Movie Catalog';

  movies.success(function(data) {
    $scope.movies = data;
  });

  $scope.getRating = function(stars) {
    return new Array(stars);
  }
}]);
