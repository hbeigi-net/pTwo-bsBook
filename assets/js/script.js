$(window).on("scroll load", function () {
    if ($("#ab_bo_animated").offset().top - $(window).scrollTop() < $(window).height() - 200) {
        $("#ab_bo_animated").addClass("animate__slideInRight").removeClass("invisible");
    }

    
    // if($("#cont_frm form").offset().top - $(window).scrollTop() < $(window).height -200) 
    // {
    //     console.log("1");
    //     $("#cont_us_animated").addClass("animate__slideInRight").removeClass("invisible");
    //     $("#footer_logo_animated").addClass("animate__slideInLeft").removeClass("invisible");
    //     console.log("2");
    // }

    $("#about_writer .card").each(function (index, element) 
    {
        if ($(this).offset().top - $(window).scrollTop() < $(window).height() - 200)
         {
            $(this).addClass("animate__zoomIn").removeClass("invisible");
         }
        
    }
        
    );

    

 
});