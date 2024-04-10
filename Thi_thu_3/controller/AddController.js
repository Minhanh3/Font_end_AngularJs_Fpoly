window.AddController = function ($scope, $http, $location) {
  $scope.title = "Thêm Nhân Viên";
  const linkApi = "http://localhost:3000/nhan-vien";
  $scope.nhanvien = {
    ho_ten: "",
    sdt: "",
    email: "",
    chuc_vu: " ",
    ngay_sinh: "",
  };
  $scope.addPost = function () {
    $scope.nhanvien;
    $http.post(linkApi, $scope.nhanvien).then(function (response) {
      if (response.status == 201) {
        alert("Thêm thành công");
        $location.path("/list-employee");
      }
    });
  };
};
