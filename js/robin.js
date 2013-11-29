$(document).ready(function(){
	$(".alert-outer").fadeTo('slow', 0.99);
	divHeight = $('.alert-outer').height();
	headingHeight = $('.alert-outer h3').height();
	paddingAmt = (divHeight - headingHeight) / 2;
	$('.alert-outer h3').css({
	  //"margin-top": paddingAmt
	})
});
