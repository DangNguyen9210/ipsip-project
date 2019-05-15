var app = angular.module('add', []);

app.controller('post', function getInfo($scope, $http) {
    $scope.name = null;
    $scope.host = null;
    $scope.info = null;
    $scope.person = null;
    $scope.type = null;
    $scope.alert = [];

    $scope.getInfo = function getInfo(name, host, info, person, type) {

        var data = {
            name: name,
            host: host,
            info: info,
            person: person,
            type: type
        };
        var url = "https://h2kgcp144d.execute-api.us-east-2.amazonaws.com/Testing-midterm/rds-insert-alert-info";

        $http.post(url, data)
            .then(
                function(response) {
                    $scope.alert.push(response.data);
                    alert("Add info successful!");
                },
                function(error) {
                    alert("Failed to add info!");
                });
    };
});
