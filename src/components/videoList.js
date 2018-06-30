angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    index: '<'
  },
  controller: function() {
    console.log(this, 'list');
  },
  templateUrl: 'src/templates/videoList.html'
});