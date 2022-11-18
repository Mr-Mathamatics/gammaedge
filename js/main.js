// toggle
$(".navbar-toggler").on("click", function () {
    var w = $('#sidebar').width();
    var pos = $('#sidebar').offset().left;

    if (pos === 0) {
        $("#sidebar").animate({ "left": -w }, "slow");
    }
    else {
        $("#sidebar").animate({ "left": "0" }, "slow");
    }

});
$('#sidebar').on('hide.bs.collapse', function () {
    $('.navbar-toggler').removeClass('open');
})
$('#sidebar').on('show.bs.collapse', function () {
    $('.navbar-toggler').addClass('open');
});



$('.banner-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<svg viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>', '<svg viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'],
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
})