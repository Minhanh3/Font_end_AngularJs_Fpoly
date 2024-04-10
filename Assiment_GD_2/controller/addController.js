window.addController = function ($scope, $http, $location) {
  $scope.title = "Form thêm thông tin sinh viên manhdz";
  const apiSach = "http://localhost:3000/sachs";
  $scope.sach = {
    name: "",
    tacgia: "",
    ngongu: "",
    theloai: "",
    sotrang: 0,
    giaban: 0,
  };
  $scope.addSach = function () {
    $scope.checkMessageName = "";
    $scope.checkMessageTacGia = "";
    $scope.checkMessageNXB = "";
    $scope.checkMessageGiaBan = "";
    $scope.checkMessageSoTrang = "";

    $scope.check = false;

    if ($scope.sach.name == "") {
      $scope.check = true;
      $scope.checkMessageName = "Tên trống";
      return;
    }
    if ($scope.sach.tacgia == "") {
      $scope.check = true;
      $scope.checkMessageTacGia = "Tên tác giả trống";
      return;
    }
    if ($scope.sach.nxban == "") {
      $scope.check = true;
      $scope.checkMessageNXB = "Nhà xuất bản trống";
      return;
    }
    if (isNaN($scope.sach.giaban) || Number($scope.sach.giaban) < 10000) {
      $scope.check = true;
      $scope.checkMessageGiaBan = "Giá bán phải là số và lớn hơn 10000";
      return;
    }
    if (isNaN($scope.sach.sotrang) || Number($scope.sach.sotrang) < 100) {
      $scope.check = true;
      $scope.checkMessageSoTrang = "Số trang phải là số và lớn hơn 100 trang";
      return;
    }
    $scope.sach;
    $http.post(apiSach, $scope.sach).then(function (response) {
      if (response) {
        alert("Thêm Thành Công");
        $location.path("");
      }
    });
  };
};
