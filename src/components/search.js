angular.module('video-player')
  .component('search', {
    bindings: {
      service: '<',
      result: '<',
      query: '='
    },
    controller: function($scope, youTube) {
      this.debouncedSearch = _.debounce(youTube.search, 750);
    },
    templateUrl: 'src/templates/search.html'
  });