angular.module('video-player')
  .component('app', {
    controller: function() {
      this.videos = window.exampleVideoData;
      this.index = 0;
      this.currentVideo = this.videos[this.index];
      this.clicked = false;
      this.selectVideo = () => {};
      this.searchResults = () => {};

      this.onClick = (index) => {
        this.index = index;
        this.currentVideo = this.videos[this.index];
        this.clicked = true;
        console.log(this.index);
        console.log(this.video);
      };
    },
    templateUrl: 'src/templates/app.html'
  });
