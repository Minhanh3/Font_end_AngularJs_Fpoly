window.trangChuController = function($scope,$http){
    const apiSach = 
    $http.get(apiSach)
        .then(function(response){
            console.log(response);
            if(response.status == 200){
                $scope
            }
        })
}