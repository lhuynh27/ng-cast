angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      currentVideo: '<',
      clicked: '<'
    },
    controller: function() {
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
