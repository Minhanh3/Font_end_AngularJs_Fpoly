window.updateController = function ($scope, $http, $location, $routeParams) {
  $scope.title = "Form sửa sinh viên";
  const apiStudent = "http://localhost:3000/Student";
  // lấy id của sinh viên url xuống
  let idStudent = $routeParams.id;
  console.log(idStudent);

  $http.get(`${apiStudent}/${idStudent}`).then(function (response) {
    if (response.status == 200) {
      $scope.student = {
        name: response.data.name,
        masv: response.data.masv,
        from: response.data.from,
        sex: response.data.sex,
      };
    }
  });
  $scope.updateStudent = function () {
    let newStudent = {
      name: $scope.student.name,
      masv: $scope.student.masv,
      from: $scope.student.from,
      sex: $scope.student.sex,
    };
    $http
      .put(`${apiStudent}/${idStudent}`, newStudent)
      .then(function (response) {
        if (response) {
          $location.path("Trang chủ rồi");
        }
      });
  };
};
