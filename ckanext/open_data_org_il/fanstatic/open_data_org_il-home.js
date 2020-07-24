$(function() {
    var featured_orgs = jQuery(".featured-organizations-list");
    featured_orgs.imagesLoaded(function() {
        featured_orgs.masonry({
            itemSelector: '.media-item',
        });
    });
});
