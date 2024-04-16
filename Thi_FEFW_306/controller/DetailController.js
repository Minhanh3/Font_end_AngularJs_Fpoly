window.DetailController = function ($scope, $http, $location, $routeParams) {
  $scope.title = "Chi tiet oto";
  let otoid = $routeParams.id;

  const linkAPi = "http://localhost:3000/oto";
  $http.get(`${linkAPi}/${otoid}`).then(function (response) {
    if (response) {
      $scope.oto = {
        ten: response.data.ten,
        hang: response.data.hang,
        gia: response.data.gia,
      };
    }
  });
};
