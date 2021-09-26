
// Categories Menu
  $(function() {
    $('#nav').droppy();
  });
  
//----------------------------//

//Page Menu

$(document).ready(function() {
$("#topnav li").prepend("<span></span>"); 
$("#topnav li").each(function() { 
var linkText = $(this).find("a").html(); 
$(this).find("span").show().html(linkText); 
}); 
$("#topnav li").hover(function() {	
$(this).find("span").stop().animate({
marginTop: "-40" 
}, 250);
} , function() { 
$(this).find("span").stop().animate({
marginTop: "0"  
}, 250);
});
});

//---------------------------------//

