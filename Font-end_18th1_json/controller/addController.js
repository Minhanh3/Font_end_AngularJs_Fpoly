window.addController = function ($scope, $http, $location) {
  $scope.title = "Form thêm thông tin sinh viên";
  $scope.addStudent = function () {
    const apiStudent = "http://localhost:3000/Student";
    // tạo biến kiểm tra
    let check = true;
    //ktra tên trống
    $scope.test = {
      testName: false,
      testMasv: false,
    }
    if (!$scope.student.name) { 
      check = false;
      $scope.test.testName = true;
      // alert("Không được để trống tên")
    }
    if (check) {
      let newStudent = {
        name: $scope.student.name,
        masv: $scope.student.masv,
        from: $scope.student.from,
        sex: $scope.student.sex,
      };
      console.log(newStudent);
      $http.post(apiStudent, newStudent).then(function (response) {
        if (response) {
          $location.path("Trang chủ rồi");
        }
      });
    } else {
    }
  }; 
};
