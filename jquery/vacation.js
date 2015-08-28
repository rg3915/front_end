$(document).ready(function(){
	$('button').on('click', function() {
		// create a <p> node with the price
		var price = $('<p>From $399.99</p>');
		$(this).closest('.vacation').append(price);
		$(this).remove();
		// price.appendTo($('.vacation'));
	});
});