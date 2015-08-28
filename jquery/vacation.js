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
	// find all vacations that are on-sale
	$('#filters').on('click', '.onsale-filter', function() {
		// remove highlighted
		$('.highlighted').removeClass('highlighted');
		// add a class to these vacations
		$('.vacation').filter('.onsale').addClass('highlighted');
	});
	$('#filters').on('click', '.expiring-filter', function() {
		$('.vacation').filter('.expiring').addClass('highlighted');
	});
});