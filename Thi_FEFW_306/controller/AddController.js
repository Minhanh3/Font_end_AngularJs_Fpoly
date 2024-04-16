window.AddController = function ($scope, $http, $location) {
  $scope.title = "Them San Pham";
  const linkAPi = "http://localhost:3000/oto";
  $scope.oto = {
    ten: "",
    hang: "",
    gia: "",
  };
  $scope.addPost = function () {
    $scope.oto;
    if ($scope.oto.gia < 100) {
      alert("Gia khong được nhỏ hơn 100");
    } else {
      $http.post(linkAPi, $scope.oto).then(function (response) {
        if (response.status == 201) {
          alert("Them thanh cong");
          $location.path("/list-cars");
        }
      });
    }
  };
};
