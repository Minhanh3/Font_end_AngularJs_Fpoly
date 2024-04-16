window.ListController = function ($scope, $http, $location) {
  $scope.title = "Danh Sach oto";

  const linkAPi = "http://localhost:3000/oto";

  $http.get(linkAPi).then(function (response) {
    if (response.status == 200) {
      $scope.listOto = response.data;
    }
  });
  $scope.deletePost = function (id) {
    let confirm = window.confirm("Co xoa khong");
    if (confirm) {
      $http.delete(`${linkAPi}/${id}`).then(function (response) {
        if (response) {
          alert("Xoa thanh cong");
        }
      });
    }
  };
};
