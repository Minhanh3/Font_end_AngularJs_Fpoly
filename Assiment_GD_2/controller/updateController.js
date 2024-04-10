window.updateController = function ($scope, $http, $location, $routeParams) {
  $scope.title = "Form sửa sinh viên";
  const apiSach = "http://localhost:3000/sachs";
  // lấy id sách
  let idSach = $routeParams.id;
  $scope.sach = {
    name: "",
    tacgia: "",
    ngongu: "",
    theloai: "",
    sotrang: 0,
    giaban: 0, 
    nxban: "",
  };

  $http
    .get(`${apiSach}/${idSach}`)
    .then(function (response) {
      if (response.data) {
        $scope.sach = {
          name: response.data.name,
          tacgia: response.data.tacgia,
          ngongu: response.data.ngongu,
          theloai: response.data.theloai,
          sotrang: response.data.sotrang,
          giaban: response.data.giaban,
          nxban: response.data.nxban,
        };
      }
    })
    .catch(function (error) {
      console.error("Error retrieving data:", error);
    });

  $scope.updateSach = function () {
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
    $http
      .put(`${apiSach}/${idSach}`, $scope.sach)
      .then(function (response) {
        if (response) {
          alert("Sửa Thành Công");
          $location.path("Trang chủ đây");
        }
      })
      .catch(function (error) {
        console.error("Error updating data:", error);
      });
  };
};
