angular.module('video-player')
  .component('app', {
    controller: function($scope, youTube) {
      this.videos = [{id: {videoId: ''}, snippet: {title: '', description: '', thumbnails: {default: {url: ''}}}}];
      this.searchResults = (data) => {
        this.videos = data;
        this.currentVideo = this.videos[this.index];
      };
      this.query = '';
      this.search = () => {
        youTube.search(this.query, this.searchResults);
      };

      this.index = 0;
      this.clicked = false;
      this.selectVideo = () => {};

      this.onClick = (index) => {
        this.index = index;
        this.currentVideo = this.videos[this.index];
        this.clicked = true;
      };
      this.search();
    },
    templateUrl: 'src/templates/app.html'
  });
