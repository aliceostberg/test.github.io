  	var lFollowX = 0,
    		lFollowY = 0,
    		x = 0,
    		y = 0,
    		friction = 1 / 30;

			function moveBackground() {
  			x += (lFollowX - x) * friction;
  			y += (lFollowY - y) * friction;
  
  			translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  			$('.fullscreen-bg__video').css({
    		'-webit-transform': translate,
    		'-moz-transform': translate,
    		'transform': translate
  			});

  			window.requestAnimationFrame(moveBackground);
			}

			$(window).on('mousemove click', function(e) {

  			var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  			var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  			lFollowX = (15 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  			lFollowY = (10 * lMouseY) / 100;

			});

			moveBackground();


$('.breathe').after($('.breathe').clone());


$(body).click(function() {
  $(this)[0].msRequestFullscreen();
  $(this)[0].webkitRequestFullscreen();
});

