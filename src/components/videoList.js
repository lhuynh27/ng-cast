angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      index: '<',
      onClick: '<'
    },
    controller: function() {
    },
    templateUrl: 'src/templates/videoList.html'
  });