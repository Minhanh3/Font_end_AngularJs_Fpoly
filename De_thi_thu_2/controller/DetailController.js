window.DetailController = function ($scope, $http, $routeParams) {
  $scope.title = "Thông tin Chi tiết";
  let postId = $routeParams.id;
  console.log(postId);
  const linkApi = "http://localhost:3000/sach";

  $http.get(`${linkApi}/${postId}`).then(function (response) {
    if (response.status == 200) {
      console.log(response.data);
      $scope.sach = {
        tieu_de: response.data.tieu_de,
        noi_dung: response.data.noi_dung,
        tac_gia: response.data.tac_gia,
        the_loai: response.data.the_loai,
        ngay_dang: new Date(response.data.ngay_dang)
      };
    }
  }); 
};
