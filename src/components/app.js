angular.module('video-player')
  .component('app', {
    controller: function($scope, youTube) {
      this.videos = [{id: {videoId: ''}, snippet: {title: '', description: '', thumbnails: {default: {url: ''}}}}];
      this.searchResults = (data) => {
        this.videos = data;
        this.currentVideo = this.videos[this.index];
      };
      this.query = '';
      this.search = youTube;

      this.savedSearch;

      this.index = 0;
      this.selectVideo = () => {};

      this.onClick = (index) => {
        this.index = index;
        this.currentVideo = this.videos[this.index];
      };
      this.search.search(this.query, this.searchResults);
    },
    templateUrl: 'src/templates/app.html'
  });
