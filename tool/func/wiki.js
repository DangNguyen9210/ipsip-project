var myapp = angular.module('myapp', []);
myapp.controller('Alerts', function getAlerts($scope, $http) {

    $http.get("https://h2kgcp144d.execute-api.us-east-2.amazonaws.com/Testing-midterm/rds-get-alert-info")
        .success(function(response) {
            $scope.alerts = angular.fromJson(response);
        });

    $scope.id = null;
    $scope.alerts = [];

    $scope.getId = function(id) {

        var data = {
            id: id
        };
        var url = "https://h2kgcp144d.execute-api.us-east-2.amazonaws.com/Testing-midterm/rds-delete-alert-info";

        $http.post(url, data)
            .then(
                function(response) {
                    $scope.alerts.push(response.data);
                    alert('Record deleted!');
                },
                function(error) {
                    alert('Failed to delete record!');
                });
    };
});
