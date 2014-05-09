$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		// alert('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	$('.ryu').mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	$('.ryu').mousedown(function() {
		// play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		// show hadouken and animate it to the right of the screen
	})
	$('.ryu').mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		// ryu goes back to ready position
	});
});