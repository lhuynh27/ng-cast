angular.module('video-player')
  .service('youTube', function() {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      contentType: 'application/json',
      data: {
        maxResults: '5',
        key: 'AIzaSyDPHE8jPo45GkgRqbHEnojVC734cE6XcuA',
        part: 'snippet',
        q: 'dog',
        type: 'video',
        videoEmbeddable: 'true'
      },
      success: function(data) {
        console.log('success!');
      }
    });
  });

// AIzaSyDPHE8jPo45GkgRqbHEnojVC734cE6XcuA
