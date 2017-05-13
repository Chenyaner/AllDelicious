angular.module('alldelicious.controllers.deliciousfoodController', [])

.controller('deliciousfoodController.DeliciousfoodCtrl', function($scope, $timeout, $state, $ionicLoading, $http, $location, $ionicScrollDelegate) {
    //是否显示清除输入的图票
    $scope.searchEmptyShow = false;
    //右边侧边栏每个字母的高度，是屏幕高度减去标题栏的44，底部t44减去页面样式中的margin-top:2px，margin-bottom:2px,再除以26，这样以保证在各个手机屏幕上的字母的距离的均等性
    $scope.hIndex = (window.screen.height - 44 - 44 - 4) / 26;
    //是否在屏幕中央显示选中的字母索引
    $scope.showMiddle = false;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $scope.indexs = [];

    loadData();

    for (var i = 0; i < chars.length; i++) {
        $scope.indexs.push(chars.charAt(i));
    }

    //判断清除输入框的图标是否显示
    $scope.startDot = function() {
            if ($scope.cityName.length = 0 || $scope.cityName == '') {
                $scope.searchEmptyShow = false;
            } else {
                $scope.searchEmptyShow = true;
            }
        }
        //判断清除输入框的图票是否显示
    $scope.searchEmpty = function() {
        $scope.searchEmptyShow = false;
        $scope.cityName = '';
    }

    //在右侧字母点击时
    $scope.mTouch = function(c) {
        $scope.showMiddle = true;
        $scope.hint = c;
        $location.hash("city_" + $scope.hint);
        $ionicScrollDelegate.anchorScroll(true);
    }
    $scope.mRelease = function() {
        console.log("a")
        $timeout(function() {
            $scope.showMiddle = false;
        }, 300)
    };

    //从本地的一个包含全国各城市的json文件中加载数据
    function loadData() {
        $ionicLoading.show();
        $http.get("json/city.json").success(function(data) {
            $scope.cityDatas = data.dataList;
            $ionicLoading.hide();
        })
    }

    //点击城市  进入城市美食
    $scope.gofoodCity = function(id, city) {
        console.log(id)
        console.log(city);
        var param = {
            obj: {
                city_id: id,
                city_name: city
            }
        };
        $state.go("tab.citydeliciousfood",param)
    }


})


// 各城市下美食
.controller('deliciousfoodController.cityDeliciousfoodCtrl',function($scope,$stateParams){
	console.log("tk fdn ")
	console.log($stateParams);
	// $scope.city_id = $stateParams.obj.city_id;
	// $scope.city_name = $stateParams.obj.city_name;
	$scope.city_name = "北京";

})