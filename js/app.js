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
		playHadouken(); // play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show();
		$('.hadouken').animate(
			{'left': '300px'},
			 500,
			 function() {
				$(this).hide();
				$(this).css('left', '-212px');
			}
		);
		// show hadouken and animate it to the right of the screen
	})
	$('.ryu').mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		// ryu goes back to ready position
	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}