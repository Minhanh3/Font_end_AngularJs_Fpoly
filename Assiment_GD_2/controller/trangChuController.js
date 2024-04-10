window.trangChuController = function ($scope, $http) {
  $scope.title = "Thông tin";
  const apiStudents = "http://localhost:3000/sachs";
  $http.get(apiStudents).then(function (response) {
    console.log(response);
    if (response.status == 200) {
      $scope.listsach = response.data;
    }
  });
  
  $scope.deleteSach = function (id) {
    let confirm = window.confirm("Có chắc muốn xóa không?");
    if (confirm) {
      $http
        .delete(`${apiStudents}/${id}`)
        .then(function (response) {
          if (response) {
            alert("Xóa thành công!");
          }
        })
        .catch(function (error) {
          console.error(error);
          alert("Xóa thất bại!");
        });
    }
  };
};
