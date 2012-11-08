 $(function(){
    $('#slides').slides({
        play: 5000,
        pause: 2500,
        hoverPause: true,
        animationStart: function(current){
            $('.caption').animate({
                bottom:-270
            },100);
        },
        animationComplete: function(current){
            $('.caption').animate({
                bottom:-220
            },200);
        },
        slidesLoaded: function() {
            $('.caption').animate({
                bottom:-220
            },200);
        }
    });
});