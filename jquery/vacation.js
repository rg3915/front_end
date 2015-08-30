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

	function showTicket () {
		$(this).closest('.confirmation').find('.ticket').slideDown();
	}

	// Showing button On DOM load
		// alert($('button').length);
	$('.confirmation').on('click', 'button', showTicket);
	$('.confirmation').on('mouseenter', 'button', showTicket);

	// calculate total price with keyboard event
	$('.vacation').on('keyup', '.quantity', function() {
		// Get the price for this vacation
		var price = +$(this).closest('.vacation').data('price');
		// Get the quantity entered
		var quantity = +$(this).val();
		// Set the total to price * quantity
		$('#total').text(price * quantity);
	});

	// Showing comments
	$('.vacation').on('click', '.expand', function(event) {
		event.preventDefault();
		// Find the comments ul
		// Show the comments ul
		$(this).closest('.vacation').find('.comments').fadeToggle();
	});
});