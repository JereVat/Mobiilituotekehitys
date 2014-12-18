$(function() {      
      //Enable swiping...
      $("#test").swipe( {
        swipeStatus:function(event, phase, direction, distance)
        {
          var str = "";
          if (phase=="move")
            str="You have moved " + distance +" pixels, past 200 and the handler will fire";
          if (phase=="end")
            str="Handler fired, you swiped " + direction;
          $(this).text(str);
        },
        triggerOnTouchEnd:false,
        threshold:200
      });
    });