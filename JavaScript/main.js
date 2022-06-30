$(document).ready(function () {
    setTimeout(() => {
        $(".close-ad").show();
    }, 3000);

    $(".close-ad").click(function (e) { 
        e.preventDefault();
        $(".ad").hide();
    }); 
    
    $(window).scroll(function () { 
        var scrollPos = $(window).scrollTop();
        console.log(scrollPos);
        if (scrollPos>=875){
            $(".desktop-nav-index").addClass("active");
        }
        if (scrollPos<875){
            $(".desktop-nav-index").removeClass("active");
        }
     
        if (scrollPos>=2560){
            $(".products-name1,.products-name2,.products-name3,.products-name4").addClass("animate__slideInLeft");
        }
        if (scrollPos<2560){
            $(".products-name1,.products-name2,.products-name3,.products-name4").removeClass("animate__slideInLeft");
        }
    });
});

