var myapp = angular.module('myapp', []);
myapp.controller('getAlerts', function getAlerts($scope, $http) {

    $http.get("https://h2kgcp144d.execute-api.us-east-2.amazonaws.com/Testing-midterm/rds-get-alert-trigger")
        .success(function(response) {
            $scope.names = angular.fromJson(response);
        });
});
