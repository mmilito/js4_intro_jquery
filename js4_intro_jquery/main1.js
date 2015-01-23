// main.js


$(document).on('ready', function() {
 
 //exercise 1.2 and 1.3
	$('#btn').click(function() {
		console.log("append text to body");
		$('body').append("append text to body");
	});

//exercise 1.4
	$('#btn_two').click(function() {
		console.log("append header1 to page_container");
		$('.page_container').append("<h1>some additional h1 text</h1>");
	});	

//exercise 1.5
	$('#btn_three').click(function() {
		console.log("append ul to page_container");
		$('.page_container').append("<ul>List Header</ul>");
		$('ul').addClass("list_header");
		$('ul').append("<li>item one</li>");
		$('ul').append("<li>item_two</li>");

	});

//exercise

})