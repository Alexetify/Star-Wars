$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navClass: ['slider-nav-left', 'slider-nav-right'],
        responsive:{ 
            0:{
                items:1
            },
            700:{
                items:2
            },
            900:{
                items:3
            },
            1200: 
            {
                items:4
            }
        }
    })
});