var app = angular.module('report', ['googlechart']);

app.controller('make', function postservice($scope, $http) {
    $scope.timebegin = null;
    $scope.timeend = null;
    $scope.hide = false;

    $scope.message = [];
    $scope.message1 = [];
    $scope.message2 = [];
    $scope.message3 = [];
    $scope.message4 = [];

    $scope.isLoading = false;

    $scope.makeReports = function(timebegin, timeend) {
        $scope.hide = $scope.hide = true;
        var data = {
            timebegin: timebegin,
            timeend: timeend
        };
        var url = "https://h2kgcp144d.execute-api.us-east-2.amazonaws.com/Testing-midterm/rds-report/report-2";

        $http.post(url, data)
            .then(
                function(response) {
                    $scope.message = angular.fromJson(response.data.message);
                    $scope.message1 = angular.fromJson(response.data.message1);
                    $scope.message2 = angular.fromJson(response.data.message2);
                    $scope.message3 = angular.fromJson(response.data.message3);
                    $scope.message4 = angular.fromJson(response.data.message4);

                    //Chart
                    $scope.myChartObject = {};

                    $scope.myChartObject.type = "PieChart";

                    $scope.dtd = [];

                    for (var i = 0, len = $scope.message.length - 1; i < len; i++) {
                        $scope.dtd.push({
                            c: [{
                                v: $scope.message[i]["name"]
                            }, {
                                v: $scope.message[i]["amount"]
                            }]
                        })
                    }

                    $scope.myChartObject.data = {
                        "cols": [{
                                id: "t",
                                label: "Topping",
                                type: "string"
                            },
                            {
                                id: "s",
                                label: "Unit",
                                type: "number"
                            }
                        ],
                        "rows": $scope.dtd
                    };

                    $scope.myChartObject.options = {
                        backgroundColor: 'transparent',
                        'title': 'Host with most alert chart'
                    };

                    //Chart1
                    $scope.myChartObject1 = {};

                    $scope.myChartObject1.type = "PieChart";

                    $scope.dtd1 = [];

                    for (var i = 0, len = $scope.message1.length - 1; i < len; i++) {
                        $scope.dtd1.push({
                            c: [{
                                v: $scope.message1[i]["name"]
                            }, {
                                v: $scope.message1[i]["amount"]
                            }]
                        })
                    }

                    $scope.myChartObject1.data = {
                        "cols": [{
                                id: "t",
                                label: "Topping",
                                type: "string"
                            },
                            {
                                id: "s",
                                label: "Unit",
                                type: "number"
                            }
                        ],
                        "rows": $scope.dtd1
                    };

                    $scope.myChartObject1.options = {
                        backgroundColor: 'transparent',
                        'title': 'Alert trigger most chart'
                    };

                    //Chart2
                    $scope.myChartObject2 = {};

                    $scope.myChartObject2.type = "PieChart";

                    $scope.dtd2 = [];

                    for (var i = 0, len = $scope.message2.length - 1; i < len; i++) {
                        $scope.dtd2.push({
                            c: [{
                                v: $scope.message2[i]["Time"] + ":00"
                            }, {
                                v: $scope.message2[i]["amount"]
                            }]
                        })
                    }

                    $scope.myChartObject2.data = {
                        "cols": [{
                                id: "t",
                                label: "Topping",
                                type: "string"
                            },
                            {
                                id: "s",
                                label: "Unit",
                                type: "number"
                            }
                        ],
                        "rows": $scope.dtd2
                    };

                    $scope.myChartObject2.options = {
                        backgroundColor: 'transparent',
                        'title': 'Peak Hours chart'
                    };

                    //Chart3
                    $scope.myChartObject3 = {};

                    $scope.myChartObject3.type = "PieChart";

                    $scope.dtd3 = [];

                    for (var i = 0, len = $scope.message3.length; i < len; i++) {
                        $scope.dtd3.push({
                            c: [{
                                v: $scope.message3[i]["name"]
                            }, {
                                v: $scope.message3[i]["amount"]
                            }]
                        })
                    }

                    $scope.myChartObject3.data = {
                        "cols": [{
                                id: "t",
                                label: "Topping",
                                type: "string"
                            },
                            {
                                id: "s",
                                label: "Unit",
                                type: "number"
                            }
                        ],
                        "rows": $scope.dtd3
                    };

                    $scope.myChartObject3.options = {
                        backgroundColor: 'transparent',
                        'title': 'Alert-host have most info change chart'
                    };
                    alert('Reports made!');
                },
                function(error) {
                    alert('Failed to make reports!');
                    //$scope.isLoading = false;
                });
    };
});
