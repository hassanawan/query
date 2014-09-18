//$(document).click(function (event) {
//    $('#centerImage').removeClass("DynamicClass").addClass("CenterClass");
    
//});

$(document).ready(function () {


    $('#div4').removeClass("CenterClass").addClass("DynamicClass");
  // $('.CenterClass').removeClass("CenterClass").addClass("DynamicClass");

    
//    $('.amazingcarousel-item-container').removeClass("CenterClass").addClass("DynamicClass");
    $(".html5lightbox").click(function () {
		
                 var id = $(this).attr("id");
 // if ($(this).children().height() == "119") {
                    // $(".thumb").css("height", "119");
                    // $(".more").attr('style', 'height:50px !important');
                    // $(this).children().css({ 'height': '130' });
                    // $(this).next(".more").attr('style', 'height:63px !important');

                // }
                // $(".thumbClass").closest("div").removeClass("ChangeInnerContent").addClass("InnerContent");
                // $(this).closest("div").removeClass("InnerContent").addClass("ChangeInnerContent");

                if (id == "img1")
                    $("#tooltip").text("this is thumb1");
                if (id == "img2")
                    $("#tooltip").text("this is thumb2");
                if (id == "img3")
                    $("#tooltip").text("this is thumb3");
                if (id == "img4")
                    $("#tooltip").text("this is thumb4");
                if (id == "img5")
                    $("#tooltip").text("this is thumb5");
                if (id == "img6")
                    $("#tooltip").text("this is thumb6");
                if (id == "thumb7")
                    $("#tooltip").text("this is thumb7");
                if (id == "thumb8")
                    $("#tooltip").text("this is thumb8");
                if (id == "thumb9")
                    $("#tooltip").text("this is thumb9");
                if (id == "thumb10")
                    $("#tooltip").text("this is thumb10");
                if (id == "thumb11")
                    $("#tooltip").text("this is thumb11");



            });

});

//function topImage(id) {
   
//    $('#centerImage').removeClass("CenterClass").addClass("DynamicClass");
//    return false;
//}