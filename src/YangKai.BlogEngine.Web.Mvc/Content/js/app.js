﻿var interceptor;

angular.module("app", ['formatFilters', 'MessageServices', 'ArticleServices', 'CommentServices', 'UserServices', 'customDirectives', 'ui.utils', 'ui.bootstrap']).config([
  "$locationProvider", "$routeProvider", "$httpProvider", function($locationProvider, $routeProvider, $httpProvider) {
    $httpProvider.responseInterceptors.push(interceptor);
    $locationProvider.html5Mode(false).hashPrefix('!');
    return $routeProvider.when("/list/:channel/:group/:type/:query", {
      templateUrl: "/partials/Article/list.html",
      controller: ArticleListController
    }).when("/list/:channel/:group", {
      templateUrl: "/partials/Article/list.html",
      controller: ArticleListController
    }).when("/list/:channel", {
      templateUrl: "/partials/Article/list.html",
      controller: ArticleListController
    }).when("/search/:key", {
      templateUrl: "/partials/Article/list.html",
      controller: ArticleListController
    }).when("/post/:url", {
      templateUrl: "/partials/Article/detail.html",
      controller: ArticleDetailController
    }).when("/board", {
      templateUrl: "/partials/message.html",
      controller: MessageController
    }).when("/about", {
      templateUrl: "/partials/about.html",
      controller: AboutController
    }).when("/", {
      templateUrl: "/partials/index.html",
      controller: HomeController
    }).otherwise({
      redirectTo: "/"
    });
  }
]);

angular.module("app-login", ['UserServices', 'ui.utils', 'ui.bootstrap']);

angular.module("app-admin", ['formatFilters', 'MessageServices', 'ArticleServices', 'CommentServices', 'UserServices', 'ChannelServices', 'GroupServices', 'CategoryServices', 'customDirectives', 'ui.utils', 'ui.bootstrap']).config([
  "$locationProvider", "$routeProvider", "$httpProvider", function($locationProvider, $routeProvider, $httpProvider) {
    $httpProvider.responseInterceptors.push(interceptor);
    $locationProvider.html5Mode(false).hashPrefix('!');
    return $routeProvider.when("/channel", {
      templateUrl: "/partials/Admin/channel/list.html",
      controller: ChannelController
    }).when("/channel(':channel')/group", {
      templateUrl: "/partials/Admin/group/list.html",
      controller: GroupController
    }).when("/channel(':channel')/group(':group')/category", {
      templateUrl: "/partials/Admin/category/list.html",
      controller: CategoryController
    }).when("/article", {
      templateUrl: "/partials/Admin/article/list.html",
      controller: ArticleController
    }).when("/article(':id')", {
      templateUrl: "/partials/Admin/article/detail.html",
      controller: ArticleDetailController
    }).when("/article/new", {
      templateUrl: "/partials/Admin/article/detail.html",
      controller: ArticleDetailController
    }).when("/board", {
      templateUrl: "/partials/Admin/board/list.html",
      controller: BoardController
    }).when("/", {
      templateUrl: "/partials/Admin/index.html",
      controller: HomeController
    }).otherwise({
      redirectTo: "/"
    });
  }
]);

interceptor = [
  "$rootScope", "$q", function(scope, $q) {
    var error, success;
    success = function(response) {
      return response;
    };
    error = function(response) {
      debugger;
      var status;
      status = response.status;
      if (status === 401) {
        window.location = "/login";
      } else if (status === 400) {
        message.error(response.data['odata.error'].innererror.message);
      } else if (status === 500) {
        message.error(response.data['odata.error'].innererror.message);
      }
      return $q.reject(response);
    };
    return function(promise) {
      return promise.then(success, error);
    };
  }
];
