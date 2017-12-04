app.factory('movies', ['$http', function($http) {
  return $http.get('http://private-74b50-provaangularjs.apiary-mock.com/movies')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
