window.detailController = function ($scope, $http, $location, $routeParams) {
//   $scope.title = "Form sửa sinh viên";
  const apiSach = "http://localhost:3000/sachs";
  // lấy id sách
  let idSach = $routeParams.id;

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
};
