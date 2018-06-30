angular.module('video-player')
  .component('search', {
    bindings: {
      search: '<',
      result: '<',
      query: '='
    },
    controller: function($scope, youTube) {
    },
    templateUrl: 'src/templates/search.html'
  });