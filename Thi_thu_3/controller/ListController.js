window.trangChuController = function ($scope, $http) {
  $scope.title = "Danh sách bài viết";
  const linkApi = "http://localhost:3000/sach";
  $http.get(linkApi).then(function (response) {
    console.log(response);
    if (response.status == 200) {
      $scope.listpost = response.data;
    }
  });
  $scope.deletePost = function (id) {
    let confirm = window.confirm("Có muốn xóa không");
    if (confirm) {
      $http.delete(`${linkApi}/${id}`).then(function (response) {
        if (response) {
          alert("Xóa thành công");
        }
      });
    }
  };
};
