const galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryController', ['$http', function($http) {
    console.log('in GalleryController');
    const self = this;

    self.imageArray = [];

    $http.get('/images').then(function(response) {
        console.log(response);
        self.imageArray = response.data
    });

    self.flipImage = function(context) {
        context.imageClick = context.imageClick === true ? false: true;
        console.log(context.imageClick);

        if (context.imageClick) {
            ++context.image.view_count
        }

    };

    self.likeImage = function(context) {
        ++context.image.like_count
        console.log(context.image.like_count);
    }
}]);