var myapp = angular.module('myapp', []);
myapp.controller('Alerts', function getAlerts($scope, $http) {

    $scope.name = null;
    $scope.host = null;
    $scope.searchs = [];
    $scope.hide = false;

    $scope.getSearch = function(name, host) {
        $scope.hide = $scope.hide = true;
        var data = {
            name: name,
            host: host
        };
        var url = "https://h2kgcp144d.execute-api.us-east-2.amazonaws.com/Testing-midterm/rds-search-alert-info";

        $http.post(url, data)
            .then(
                function(response) {
                    $scope.searchs = angular.fromJson(response.data);
                    alert('Alerts found!');
                    //$scope.hide = false;
                },
                function(error) {
                    alert('Failed to search!');
                    //$scope.search = false;
                });
    };
});
