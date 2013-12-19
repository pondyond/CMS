﻿
angular.module("formatFilters", []).filter("isFuture", function() {
  return function(input) {
    return new Date(input) > new Date();
  };
}).filter("line", function() {
  return function(input) {
    if (!input) {
      return input;
    }
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br />');
  };
}).filter('formatFileSize', function() {
  return function(bytes) {
    if (bytes === null || bytes === void 0) {
      return bytes;
    }
    if (typeof bytes !== 'number') {
      return '';
    }
    if (bytes >= 1000000000) {
      return (bytes / 1000000000).toFixed(2) + ' GB';
    }
    if (bytes >= 1000000) {
      return (bytes / 1000000).toFixed(2) + ' MB';
    }
    return (bytes / 1000).toFixed(2) + ' KB';
  };
}).filter('fromNow', function() {
  return function(input) {
    if (input === null) {
      return;
    }
    if (input === void 0) {
      return;
    }
    return moment(input).fromNow();
  };
});
