$(document).ready(function() {
    var $this = $(document.getElementById("TLDR-title"));
    setTimeout(function(){ 
        $this.css("transform", "translateX(0%)");
        setTimeout(function(){ 
            $this.children().css("opacity", "1");
        }, 200);
    }, 400);

    

    



    // $("#page-wrapper").click(function(){
    //     var $this = $(this);
    //     $(document.getElementById("loader-wrapper")).css("visibility", "inherit");
    //     $(document.getElementById("button")).css("visibility", "hidden");
    //     setTimeout(function(){
    //         $('body').addClass('loaded');

    //         $this.css("top", "-120%");

    //         var $card = $(document.getElementById("card"));
    //         $card.css("display", "inherit");
    //     }, 2000);
        
    // });



    // $("#top-bar").click(up());
});

function up(){
        var $this = $(document.getElementById("page-wrapper"));
        console.log("1");
        $this.css("top", "0%");
        console.log(3);

        var $card = $(document.getElementById("card"));
        $card.css("display", "inherit");
    }

