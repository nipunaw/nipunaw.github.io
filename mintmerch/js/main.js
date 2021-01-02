$(document).ready(function() {
$('#menu').click(function() {
$('body').toggleClass('toggled');
$('header').toggleClass('toggled');
$('#toggled').toggleClass('scroll');
});
$('#close').click(function() {
$('body').removeClass('toggled');
$('header').removeClass('toggled');
$('#toggled').removeClass('scroll');
});
$('#toggled, #menu').clickoutside(function() {
  $('body').removeClass('toggled');
  $('header').removeClass('toggled');
  $('#toggled').removeClass('scroll');
});
});

$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.width() >= 1089) {
	$('body').removeClass('toggled');
  	$('header').removeClass('toggled');
  	$('#toggled').removeClass('scroll');
}
});

$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.width() <= 1089) {
$("nav").removeClass("sticky");
}
});

function myFunction() {
    var x = document.getElementById("popup");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var win = $(this);
    if (win.width() >= 1089) {
    if (scroll > 50) {
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
  }
});

(function(jQuery) {
   jQuery.fn.clickoutside = function(callback) {
      var outside = 1, self = $(this);
      self.cb = callback;
      this.click(function() {
         outside = 0;
      });
      $(document).click(function() {
         outside && self.cb();
         outside = 1;
      });
      return $(this);
   }
})(jQuery);
