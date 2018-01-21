const galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryController', ['$http', function($http) {
    console.log('in GalleryController');
    const self = this;
    self.commentsActive = false;
    
    self.imageArray = [];
    self.lastImage; 
    self.commentsArray = [];
    self.commentUrl;
    self.newComment = {};
    
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
            increaseViewCount(context);
        } else {
            self.getImages();
        }
    };

    function increaseViewCount(context) {
        let id = { id: context.image.id }
        let url = '/images/views';
        $http.put(url, id).then(function(response) {
            context.image.view_count += 1
        }); 
    }

    self.likeImage = function(context) {
        let id = { id: context.image.id }
        let url = '/images/likes';

        $http.put(url, id).then(function(response) {
            console.log('like response', response);
            self.getImages(); 
        });       
    }

    self.imageComments = function(context) {
        self.lastImage= context;
        let id = context.image.id
        console.log(self.lastImage);
        
        self.commentUrl = context.image.url;
        self.newComment.image_id = id;
        self.commentsActive = true;
       
        $http.get('/comments/' + id).then(function(response) {
            console.log(response);
            self.commentsArray = response.data
            increaseViewCount(context)
        });
    }


    self.hideComments = function() {
        self.commentsActive = false;
    }

    self.postComment = function(comment) {
        console.log(comment);
        let sendComment = comment;

        $http.post('/comments', sendComment).then(function(response) {
            self.newComment = {};
            self.imageComments(self.lastImage);
        });

    }

}]);