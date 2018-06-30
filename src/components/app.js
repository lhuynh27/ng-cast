angular.module('video-player')
  .component('app', {
    controller: function($scope, youTube) {
      this.videos = window.exampleVideoData;
      this.index = 0;
      this.currentVideo = this.videos[this.index];
      this.clicked = false;
      this.selectVideo = () => {};
      this.searchResults = () => {};
      youTube.search({max: '5', key: 'AIzaSyDPHE8jPo45GkgRqbHEnojVC734cE6XcuA', q: 'dog'}, ()=>{});

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
