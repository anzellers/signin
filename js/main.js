//Functions


var openWindow = function() {
	$('.modal').fadeIn(1000);
}

var closeWindow = function() {
	$('.modal').fadeOut(1000);
}

var submitError = function() {
	$('input').addClass('error');
}

var removeError = function() {
	$(this).removeClass('error');
}

var stopbubbling = function(event) {
	event.stopPropagation();
}

$('.getstarted').on('click', stopbubbling);

$('.modal').on('click', closeWindow);

$('.signin').on('click', openWindow);

$('.close').on('click', closeWindow);

$('.submit').on('click', submitError);

$('input').on('focus', removeError);

// $('.submit').on('click', function(event) {
// 	event.stopPropagation();
// 	$('input').addClass('error');
// });

// $('input').on('click', function(event) {
// 	event.stopPropagation();
// });