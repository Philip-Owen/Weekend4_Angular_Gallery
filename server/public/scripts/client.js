const galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryController', ['$http', function($http) {
    const self = this;

    // Toggle to display comments section
    self.commentsActive = false;

    // stores array of image info from database
    self.imageArray = [];

    // stores image info when show comments is clicked
    self.lastImage; 

    // stores array of comments from individual image
    self.commentsArray = [];

    // stores url of lastImage to show on 'show comments'
    self.commentUrl;
    
    // stores data for comments to be sent to databse
    self.newComment = {};
    
    // begin self.getImages()
    self.getImages = function() {
        $http.get('/images').then(function(response) {
        self.imageArray = response.data
    })}; // end self.getImages()

    self.getImages();

    // begin self.flipImage()
    self.flipImage = function(context) {
        context.imageClick = context.imageClick === true ? false: true;
        console.log(context.imageClick);

        if (context.imageClick) {
            increaseViewCount(context);
        } else {
            self.getImages();
        }
    }; // end self.flipImage()

    // begin increaseViewCount()
    function increaseViewCount(context) {
        let id = { id: context.image.id }
        let url = '/images/views';
        $http.put(url, id).then(function(response) {
            context.image.view_count += 1
        }); 
    } // end increaseViewCount()

    // begin self.likeImage()
    self.likeImage = function(context) {
        let id = { id: context.image.id }
        let url = '/images/likes';

        $http.put(url, id).then(function(response) {
            console.log('like response', response);
            self.getImages(); 
        });       
    } // end self.likeImage()

    // begin self.imageComments()
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
    } // end self.imageComments()
    
    // begin self.hideComments()
    self.hideComments = function() {
        self.commentsActive = false;
    } // end self.hideComments()

    // begin self.postComment()
    self.postComment = function(comment) {
        console.log(comment);
        let sendComment = comment;

        $http.post('/comments', sendComment).then(function(response) {
            self.newComment = {};
            self.imageComments(self.lastImage);
        });
    } // end self.postComment()

}]);