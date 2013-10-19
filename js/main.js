function rePlace(){
if(!Modernizr.input.placeholder){
	$('[placeholder]').focus(function() {
	var input = $(this);
	if (input.val() === input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	}
	}).blur(function() {
	var input = $(this);
	if (input.val() === '' || input.val() === input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	}
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
	$(this).find('[placeholder]').each(function() {
		var input = $(this);
		if (input.val() === input.attr('placeholder')) {
		input.val('');
		}
	});
	});
}
}
if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
}

var pageTop = true;
$(document).scroll(function() {
	var scrollNum = $(this).scrollTop();
	if( scrollNum > 220 ) {
		if( pageTop ) {
			pageTop = false;
			$('.logo-d').css({left:'50px'});
			$('.logo-l').css({left:'50px'});
			$('.pdf').css({left:'50px'});
		}
	}
	else {
		if( !pageTop ) {
			pageTop = true;
			$('.logo-d').css({left:'-200px'});
			$('.logo-l').css({left:'-200px'});
			$('.pdf').css({left:'-200px'});
		}
	}
});

// Contact Form
$("#contact").submit(function(e){
  e.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var text = $("#message").val();
  var dataString = 'name=' + name + '&email=' + email + '&text=' + text;
  function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
  }
  if (isValidEmail(email) && (text.length > 1) && (name.length > 1)){
    $.ajax({
    type: "POST",
    url: "/_themes/rikki-tikki/js/email.php",
    data: dataString,
    success: function(){
	$('#contact').animate({ height: 0, opacity: 0 }, 'slow');
	$('.contact-success').fadeIn(1000);
	}
    });
  } else{
    $('.error').fadeIn(1000);
  }
  if ((name.length < 2)) {
	$('.your-name').css({'border-color':'red', '-moz-box-shadow':'inset 0 0 3px #111, 0 0 5px red', '-webkit-box-shadow':'inset 0 0 3px #111, 0 0 5px red', 'box-shadow':'inset 0 0 3px #111, 0 0 5px red'});
	document.getElementById("name").setAttribute("placeholder","Your name is required.");
	rePlace();
  }
  else{
	$('.your-name').css({'border-color':'green', '-moz-box-shadow':'inset 0 0 3px #111, 0 0 5px green', '-webkit-box-shadow':'inset 0 0 3px #111, 0 0 5px green', 'box-shadow':'inset 0 0 3px #111, 0 0 5px green'});
  }
  if (!isValidEmail(email)) {
	$('.your-email').css({'border-color':'red', '-moz-box-shadow':'inset 0 0 3px #111, 0 0 5px red', '-webkit-box-shadow':'inset 0 0 3px #111, 0 0 5px red', 'box-shadow':'inset 0 0 3px #111, 0 0 5px red'});
	document.getElementById("email").setAttribute("placeholder","Email address is required.");
	rePlace();
  }
  else{
	$('.your-email').css({'border-color':'green', '-moz-box-shadow':'inset 0 0 3px #111, 0 0 5px green', '-webkit-box-shadow':'inset 0 0 3px #111, 0 0 5px green', 'box-shadow':'inset 0 0 3px #111, 0 0 5px green'});
  }
  if ((text.length < 2)) {
	$('.your-message').css({'border-color':'red', '-moz-box-shadow':'inset 0 0 3px #111, 0 0 5px red', '-webkit-box-shadow':'inset 0 0 3px #111, 0 0 5px red', 'box-shadow':'inset 0 0 3px #111, 0 0 5px red'});
	document.getElementById("message").setAttribute("placeholder","Your message is required.");
	rePlace();
  }
  else{
	$('.your-message').css({'border-color':'green', '-moz-box-shadow':'inset 0 0 3px #111, 0 0 5px green', '-webkit-box-shadow':'inset 0 0 3px #111, 0 0 5px green', 'box-shadow':'inset 0 0 3px #111, 0 0 5px green'});
  }

  return false;

});

$(document).ready(function(){
	rePlace();
});
