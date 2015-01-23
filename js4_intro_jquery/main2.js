//JS4 Part 2 .js file

$(document).on('ready', function() {
 
 //exercise 2.2 and 2.3	
	$('p').mouseover(function() {
		console.log("paragraph pink and bang");
		$('p').css("color","pink");
		$('h2').append("!");
	});

// exercise	2.4
	$('a').click(function() {
		if (!confirm("choose OK to go to this link?")) {
			$(this).remove(); 
			return false;
		}
	});

});
