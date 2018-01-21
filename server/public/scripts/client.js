const galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryController', ['$http', function($http) {
    console.log('in GalleryController');
    const self = this;
    self.commentsActive = false;
    self.commentURL;
    self.imageArray = [];
    self.commentsArray = [
        {
            user: 'Tim',
            comment: 'Cool pic'
        },
        {
            user: 'Tony',
            comment: 'You suck!'
        }
    ];
    
    self.getImages = function() {
        $http.get('/images').then(function(response) {
        console.log(response);
        self.imageArray = response.data
    })};
    self.getImages();

    self.flipImage = function(context) {
        context.imageClick = context.imageClick === true ? false: true;
        console.log(context.imageClick);

        if (context.imageClick) {
            let id = { id: context.image.id }
            let url = '/images/views';
    
            $http.put(url, id).then(function(response) {
                context.image.view_count += 1
            }); 
        } else {
            self.getImages();
        }
    };

    self.likeImage = function(context) {
        let id = { id: context.image.id }
        let url = '/images/likes';

        $http.put(url, id).then(function(response) {
            console.log('like response', response);
            self.getImages(); 
        });       
    }

    self.imageComments = function(context) {
        self.commentURL = context.image.url;
        let id = context.image.id;
        console.log(id);
        
        self.commentsActive = true;
    }

    self.hideComments = function() {
        self.commentsActive = false;
    }

}]);