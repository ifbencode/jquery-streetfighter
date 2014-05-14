$(document).ready(function(){
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
	})
	$('.ryu').mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});
	$(document).keydown(function(e) {
        if(e.which == 88) {
		playRyutheme();
		$('.ryu-cool').show();        }
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
    });
	$(document).keyup(function(e) {
        if(e.which == 88) {
		$('.ryu-cool').hide();        }
		$('.ryu-ready').show();
		$('.ryu-still').hide();
    });

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playRyutheme () {
  $('#ryu-theme')[0].volume = 0.5;
  $('#ryu-theme')[0].load();
  $('#ryu-theme')[0].play();
}