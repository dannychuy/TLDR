$(document).ready(function() {
    var $this = $(document.getElementById("TLDR-title"));
    setTimeout(function(){ 
        $this.css("transform", "translateX(0%)");
        setTimeout(function(){ 
            $this.children().css("opacity", "1");
        }, 200);
    }, 400);


});



function up(){
    var $this = $(document.getElementById("page-wrapper"));
    var $drag = $(document.getElementById("drag"));

    if (!($.trim($drag.text()) === $.trim("Drag and Drop"))) {
        $(document.getElementById("loader-wrapper")).css("visibility", "inherit");
        $(document.getElementById("button")).css("opacity", ".5");
        setTimeout(function(){
            $('body').addClass('loaded');

            $this.css("top", "-120%");

            var $card = $(document.getElementById("card"));
            $card.css("display", "inherit");
        }, 2000);

    }
    
}

// function down(){
//     var $this = $(document.getElementById("page-wrapper"));
//     $this.css("top", "0%");

//     var $card = $(document.getElementById("card"));
//     $card.css("display", "inherit");
// }