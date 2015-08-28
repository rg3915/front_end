$(document).ready(function(){
	$('button').on('click', function() {
		// create a <p> node with the price
		var price = $('<p>From $399.99</p>');
		$('.vacation').append(price);
		$('button').remove();
		// price.appendTo($('.vacation'));
	});
});