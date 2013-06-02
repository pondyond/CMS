﻿angular.module("ArticleServices", ["ngResource"])
.factory "Article", ['$resource',($resource) ->
  $resource "/api/article/:id", {id:'@id'},
    querybypaged:
      method: "GET"
    nav:
      method: "GET"
      params:
        action:"nav"
      isArray:true
    related:
      method: "GET"
      params:
        action:"related"
      isArray:true
]