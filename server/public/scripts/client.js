const galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryController', function() {
    console.log('in GalleryController');
    const self = this;

    self.imageArray = [
        {
            url:'images/bwca.jpg',
            comments: 'Photo from the BWCA. Reminds me of spending time with my family.',
            like_count: 0,
            view_count: 0
        },
        {
            url:'images/mpls.jpg',
            comments: 'Taken from the Stone Arch Bridge. Reminds me how much Minnesota has become a part of my life.',
            like_count: 0,
            view_count: 0
        },
        {
            url:'images/friends.jpg',
            comments: 'Reminds me of good times with friends.',
            like_count: 0,
            view_count: 0
        },
        {
            url:'images/halsey.jpg',
            comments: 'With all good memories, there\'s always a dog. This is Halsey.',
            like_count: 0,
            view_count: 0
        },
        {
            url:'images/lincoln.jpg',
            comments: 'Photo of my ship moored offshore outside of Antalya, Turkey. Reminds me of my time in the service.',
            like_count: 0,
            view_count: 0
        },
        {
            url:'images/seattle.jpg',
            comments: 'Taken from the Puget Sound.',
            like_count: 0,
            view_count: 0
        }
    ];

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
});