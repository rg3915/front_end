$(document).ready(function(){
	// $('button').on('click', function() {
	$('.vacation').on('click', 'button', function() {
		// create a <p> node with the price
		// var price = $('<p>From $399.99</p>');
		var vacation = $(this).closest('.vacation');
		var amount = vacation.data('price');
		var price = $('<p>From $'+amount+'</p>');
		vacation.append(price);
		$(this).remove();
		// price.appendTo($('.vacation'));
	});
});