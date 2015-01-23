// Part 3 js


$(document).on('ready', function() {

	$('.button3').click(function() {
		$('.page_container').append("<div class='popup'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>");
		 $('.popup').append("<button class='close'>Click2Close</button");
		});

	$(document).on('click','.close',function(){
	 	$('.popup').remove();
	 });	

});
