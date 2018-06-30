angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      index: '<',
      onClick: '<'
    },
    controller: function() {
      // this.onClick = () => {};
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
