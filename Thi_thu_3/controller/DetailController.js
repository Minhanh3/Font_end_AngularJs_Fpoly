window.DetailController = function ($scope, $http, $routeParams) {
  $scope.title = "Thông tin nhân viên";

  let postID = $routeParams.id;
  const linkApi = "http://localhost:3000/nhan-vien";

  $http.get(`${linkApi}/${postID}`).then(function (response) {
    if (response.status == 200) {
      $scope.nhanvien = {
        ho_ten: response.data.ho_ten,
        sdt: response.data.sdt,
        email: response.data.email,
        chuc_vu: response.data.chuc_vu,
        ngay_sinh: new Date(response.data.ngay_sinh),
      };
    }
  });
};
