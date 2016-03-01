$(document).ready(function(){
  var zoomfactor = 1;
  for(j=0; j<10; j++){
    for (i=0; i<38; i++){
      $(".container").append("<div class='small piece" + i + j + "'></div>");
      zoomfactor += .008;
      var thispiece = ".piece" + i + j;
//      var randTransform = Math.random()*360;
//      var randBottom = 2 + Math.random()*2;
//      var randLeft = 2 + Math.random()*2;
//      var randRight = 2 + Math.random()*2;
//      var randWidth = 5 + Math.random()*5;
      var colors = ['red', 'blue', 'purple']
      var color = "#4CCDFF"
//      var rC1 = Math.floor(9*Math.random()).toString();
//      var rC2 = Math.floor(9*Math.random()).toString();
//      var rC3 = Math.floor(9*Math.random()).toString();
//      var rC4 = Math.floor(9*Math.random()).toString();
//      var rC5 = Math.floor(9*Math.random()).toString();
//      var rC6 = Math.floor(9*Math.random()).toString();
      var upOrDown = i % 2 == 0 ? 0 : 180;
      var rIndex = (-4 + Math.floor(3*Math.random())).toString();
//      var pieceColor = rC1+rC2+rC3+rC4+rC5+rC6;
      $(thispiece).css({
//        "transform": "rotate(" + upOrDown + "deg) scale(1)",
        //"transform": "rotate(" + randTransform + "deg) scale(1)",
//        "transition": ".5s",
//        "border-bottom": 40 + "px solid " + color,
//        "border-left": 40 + "px solid transparent",
//        "border-right": 40 + "px solid transparent",
        "width": 15*zoomfactor + "px",
        "height": 15*zoomfactor + "px",
        "background-color": color,
        "border-radius": "50%",
        "position": "absolute",
        "left": -40 + i*40 + "px",
        "top": -3 + j*40 + "px",
        "z-index": rIndex
      });
    }
  }
//  $('.small').on("mouseleave", function(e){
//    $(this).css({
//    })
//  })
});
