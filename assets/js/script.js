$(document).ready(function() {
	$('.btn-f-a').click(function(){
		$('.btn-f-o').show();
		$('.btn-f-a').hide();
	});	
	$('.btn-f-o').click(function(){
		$('.btn-f-a').show();
		$('.btn-f-o').hide();
	});

	var textarea = document.querySelector('textarea');

	textarea.addEventListener('keydown', autosize);
	             
	function autosize(){
	  var el = this;
	  setTimeout(function(){
	    el.style.cssText = 'height:auto;';
	    // for box-sizing other than "content-box" use:
	    // el.style.cssText = '-moz-box-sizing:content-box';
	    el.style.cssText = 'height:' + el.scrollHeight + 'px';
	  },0);
	}

	var isAnimationEnable = 0;
	var interVal;

$(".showEmotions").hover(function() {

    if (isAnimationEnable == 0) {
      $(".emoji-reactions").show().css('opacity', '1');
      $(".emoji-reactions span").velocity("transition.bounceUpIn", {
        stagger: 80
      });
      isAnimationEnable = 1;
      interVal = setInterval(function() {
        if (isAnimationEnable == 1) {
          cursorListener();
        }
      }, 500);
    }

  }, function() {

  });

  function cursorListener() {
    var isHovered = !!$('.emoji-reactions').
    filter(function() {
      return $(this).is(":hover");
    }).length;
    console.log(isHovered);
    if (!isHovered) {
      $(".emoji-reactions").velocity("transition.fadeOut", {
        delay: 1000
      });
      clearInterval(interVal);
      isAnimationEnable = 0;

    }
  }

});