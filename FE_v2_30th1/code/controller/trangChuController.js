window.trangChuController = function ($scope, $http) {
  $scope.title = "Đây là trang chủ";
  const apiStudents = "http://localhost:3000/students";
  $http.get(apiStudents).then(function (response) {
    console.log(response);
    if (response.status == 200) {
      $scope.listStudent = response.data;
    }
  });
  $scope.deleteStudent = function (id) {
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
