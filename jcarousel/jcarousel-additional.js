$(document).ready(function() {

    $('#carouselv').jsCarousel({ onthumbnailclick: function(src) { alert(src); }, autoscroll: true, masked: false, itemstodisplay: 3, orientation: 'v' });
    $('#carouselh').jsCarousel({ onthumbnailclick: function(src) { alert(src); }, autoscroll: false, circular: true, masked: false, itemstodisplay: 5, orientation: 'h' });
    $('#carouselhAuto').jsCarousel({ onthumbnailclick: function(src) { alert(src); }, autoscroll: true, masked: true, itemstodisplay: 5, orientation: 'h' });

});