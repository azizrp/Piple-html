$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50 ){
			$('.before-color').addClass('after-color');
		}
		else{
			$('.before-color').removeClass('after-color')
		}
	});
	// jquery smoth scroll
	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
})