$(document).ready(function(){

    /* Menu */
    $(".fa-bars").on('click', function(){
        $("#sidebar").css("height","320px");
        $(".menu").css("display","block");
        $(".fa-bars").css("display","none");
        $(".fa-times").css("display","block");
    });
    $(".fa-times").on('click', function(){
        $("#sidebar").css("height","60px");
        $(".menu").css("display","none");
        $(".fa-bars").css("display","block");
        $(".fa-times").css("display","none");
    });

    if (screen.width <= 1023 ) {
        $(".menu a").on('click', function () {
            $("#sidebar").css("height","60px");
            $(".menu").css("display","none");
            $(".fa-bars").css("display","block");
            $(".fa-times").css("display","none");
        });
    }

    /* End Menu */


   


    /* Work */
    $(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");

    });



    $('.filter-button').on('click', function(){
        $('.filter-button').removeClass('filter-data');
        $(this).addClass('filter-data');
    });
    /* End Work */


   


        scrollUp.on('click', function () {
            $("html, body").animate({ scrollTop: 0}, 1000);
        });
    /* End Scroll To Top */

});
