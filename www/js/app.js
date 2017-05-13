angular.module('alldelicious', ['ionic', 'alldelicious.controllers', 'alldelicious.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    //ios默认会有上一级标题，如果不要可以禁掉
    $ionicConfigProvider.platform.ios.backButton.previousTitleText(false);
    $ionicConfigProvider.views.swipeBackEnabled(false);
    $ionicConfigProvider.backButton.text('');
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $stateProvider
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })


    .state('tab.index', {
        url: '/index',
        views: {
            'tab-index': {
                templateUrl: 'templates/tab-index.html',
                controller: 'indexController.IndexCtrl'
            }
        }
    })

    // tab 美食
    .state('tab.deliciousfood', {
        url: '/deliciousfood',
        views: {
            'tab-deliciousfood': {
                templateUrl: 'templates/tab-deliciousfood.html',
                controller: 'deliciousfoodController.DeliciousfoodCtrl'
            }
        }
    })

    .state('tab.citydeliciousfood',{
      url:'/deliciousfood/citydeliciousfood',
      views:{
        'tab-deliciousfood':{
          templateUrl:'templates/deliciousfoodpage/citydeliciousfood.html',
          controller:'deliciousfoodController.cityDeliciousfoodCtrl'
        }
      },
      params:{
        obj:null
      }
    })


    .state('tab.story', {
        url: '/story',
        views: {
            'tab-story': {
                templateUrl: 'templates/tab-story.html',
                controller: 'storyController.StoryCtrl'
            }
        }
    })

    .state('tab.me', {
        url: '/me',
        views: {
            'tab-me': {
                templateUrl: 'templates/tab-me.html',
                controller: 'meController.MeCtrl'
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/index');

});
