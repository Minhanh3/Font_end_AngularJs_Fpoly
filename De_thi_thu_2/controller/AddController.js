window.AddController = function ($scope, $http, $location) {
  $scope.title = "Thêm sản phẩm";
  const linkApi = "http://localhost:3000/sach";
  $scope.sach = {
    tieu_de: "",
    noi_dung: "",
    tac_gia: "",
    the_loai: "",
    ngay_dang: "",
  }; 
  $scope.addPost = function () {
    if (flag) {
      $scope.sach;
      console.log($scope.sach);
      $http.post(linkApi, $scope.sach).then(function (response) {
        if (response.status == 201) {
          alert("Thêm thành công");
          $location.path("/list-post");
        }
      });
    } else {
      alert("Còn trống kìa");
    }
  };
};
