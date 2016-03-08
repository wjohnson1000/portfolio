$(document).ready(function(){
  var nav = $("nav");
  var body = $(document);
  body.on("scroll", function(e){
    console.log(body.scrollTop());
    if(body.scrollTop() > 300){
      nav.addClass("fix-nav");
    } else {
      nav.removeClass("fix-nav");
    }
  })
});
