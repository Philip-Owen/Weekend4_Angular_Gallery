const galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryController', ['$http', function($http) {
    console.log('in GalleryController');
    const self = this;
    
    self.imageArray = [];

    
    self.getImages = function() {
        $http.get('/images').then(function(response) {
        console.log(response);
        self.imageArray = response.data
    })};
    self.getImages();

    self.flipImage = function(context) {
        context.imageClick = context.imageClick === true ? false: true;
        console.log(context.imageClick);

        if (!context.imageClick) {
            console.log();
            
            let id = { id: context.image.id }
            let url = '/images/views';
    
            $http.put(url, id).then(function(response) {
                self.getImages();
            }); 
        }

    };

    function putRequest(route, context) {
        let id = { id: context.image.id }
        let url = '/images/' + route;

        $http.put(url, id).then(function(response) {
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
}]);