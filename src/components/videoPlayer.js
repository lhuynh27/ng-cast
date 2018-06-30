angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      video: '<',
      clicked: '<'
    },
    controller: function() {
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
