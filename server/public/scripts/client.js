const galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryController', function() {
    console.log('in GalleryController');
    const self = this;
    self.imageClick = false;

    self.imageArray = [
        {
            url:'images/bwca.jpg',
            comments: 'Photo from the BWCA. Reminds me of spending time with my family.'
        },
        {
            url:'images/mpls.jpg',
            comments: 'Photo from the Stone Arch Bridge. Reminds me how much Minnesota has become a part of my life.'
        },
        {
            url:'images/friends.jpg',
            comments: 'Reminds me of good times with friends.'
        },
        {
            url:'images/halsey.jpg',
            comments: 'With all good memories, there\'s always a dog. This is Halsey.'
        },
        {
            url:'images/lincoln.jpg',
            comments: 'Photo of my ship moored offshore outside of Antalya, Turkey. Reminds me of my time in the service.'
        },
        {
            url:'images/seattle.jpg',
            comments: 'Taken from the Puget Sound.'
        }
    ];

    self.flipImage = function(context) {
        context.imageClick = context.imageClick === true ? false: true;
        console.log(context.imageClick);
    };
});