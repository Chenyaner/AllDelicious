angular.module('alldelicious.controllers.indexController', [])

.controller('indexController.IndexCtrl', function($scope, $ionicSlideBoxDelegate) {
    //初始化 
    $scope.searchEmptyShow = false;
    //判断清除输入框的图票是否显示
    $scope.startDot = function(){
        if($scope.search.search_text.length = 0 || $scope.search.search_text == ""){
            $scope.searchEmptyShow = false;
        }else{
            $scope.searchEmptyShow = true;
        }
    }
    $scope.search = function(search_text) {
        alert("a")
        alert(search_text)
    }
    $scope.searchEmpty = function(search_text) {
        $scope.searchEmptyShow = false;
        $scope.search.search_text = '';
    }

    // $scope.options = {
    //     loop: false,
    //     effect: 'fade',
    //     speed: 500,
    // }

    // $scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
    //     // data.slider is the instance of Swiper
    //     $scope.slider = data.slider;
    // });

    // $scope.$on("$ionicSlides.slideChangeStart", function(event, data) {
    //     console.log('Slide change is beginning');
    // });

    // $scope.$on("$ionicSlides.slideChangeEnd", function(event, data) {
    //     // note: the indexes are 0-based
    //     $scope.activeIndex = data.slider.activeIndex;
    //     $scope.previousIndex = data.slider.previousIndex;
    // });
})
