$(document).ready(function () {
    $(".products").mouseover(function () { 
        $(".products-name1").addClass("animate__slideInLeft");
        $(".products-name2").addClass("animate__slideInLeft");
        $(".products-name3").addClass("animate__slideInLeft");
        $(".products-name4").addClass("animate__slideInLeft");
    });
    $(".products-title").mouseover(function () { 
        $(".products-name1").removeClass("animate__slideInLeft");
        $(".products-name2").removeClass("animate__slideInLeft");
        $(".products-name3").removeClass("animate__slideInLeft");
        $(".products-name4").removeClass("animate__slideInLeft");
    });
    $(".close-ad").click(function (e) { 
        e.preventDefault();
        $(".ad").hide();
    });  
});

