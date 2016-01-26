//Functions


var openWindow = function() {
	$('.modal').fadeIn(1000);
}

var closeWindow = function() {
	$('.modal').fadeOut(1000);
}

// var submitError = function() {
// 	$(this).addClass('error');
// }

// var removeError = function() {
// 	$(this).removeClass('error');
// }

$('.getstarted').on('click', closeWindow);

$('.signin').on('click', openWindow);

$('.close').on('click', closeWindow);

// $('.submit').on('click', submitError);
// $('input[name="user"]').on('focus', removeError);
// $('input[name="pass"]').on('focus', removeError);

$('.submit').on('click', function(event) {
	event.stopPropagation();
	$('input').addClass('error');
});

$('input[name="pass"]').on('click', function(event) {
	event.stopPropagation();
	$('input[name="pass"]').removeClass('error');
});

$('input[name="user"]').on('click', function(event) {
	event.stopPropagation();
	$('input[name="user"]').removeClass('error');
});