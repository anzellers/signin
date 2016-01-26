//Functions


var openWindow = function() {
	$('.modal').fadeIn(1000);
}

var closeWindow = function() {
	$('.modal').fadeOut(1000);
}

// var submitError = function() {
// 	$('input').addClass('error');
// 	event.stopPropagation();
// }

var removeError = function() {
		$(this).removeClass('error');
}

$('.modal').on('click', closeWindow);

$('.signin').on('click', openWindow);

$('.close').on('click', closeWindow);

// $('.submit').on('click', submitError);

// $('input[name="user"]').on('focus', removeError);

$('input[name="pass"]').on('click', function(event) {
	event.stopPropagation();
	$('input[name="pass"]').removeClass('error');
});

$('input[name="user"]').on('click', function(event) {
	event.stopPropagation();
	$('input[name="user"]').removeClass('error');
});

$('.submit').on('click', function(event) {
	event.stopPropagation();
	$('input').addClass('error');
});