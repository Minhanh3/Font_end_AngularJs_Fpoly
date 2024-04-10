window.detailController = function ($scope, $http, $location, $routeParams) {
    $scope.title = "form Chi tiết sinh viên"
    const apiListSach = "http://localhost:3000/listSach"
    let idSach = $routeParams.id;
    $http.get(`${apiListSach}/${idSach}`)
        .then(function (response) {
            if (response.status == 200) {
                $scope.sach = {
                    tenSach: response.data.tenSach,
                    giaSach: response.data.giaSach,
                    soLuong: response.data.soLuong,
                    tacGia: response.data.tacGia,
                    trongLuong: response.data.trongLuong,
                    ghiChu: response.data.ghiChu,
                    hinhAnh: response.data.hinhAnh,
                    id: response.data.id
                }
            }
        })
}