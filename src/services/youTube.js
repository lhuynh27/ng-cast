angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(str, cb, token = '') {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        // contentType: 'application/json',
        params: {
          maxResults: '5',
          key: window.YOUTUBE_API_KEY,
          part: 'snippet',
          q: str,
          type: 'video',
          videoEmbeddable: 'true',
          nextPageToken: token
        }
      })
        .then(function (data) {
          console.log(data);
          cb(data.data.items);
          // this callback will be called asynchronously
          // when the response is available
        });
    }; 
  });
