## Level 1 - Introduction

### Selectors

p { ... } // css selector

$("p"); // jQuery selector

#container { ... } // css selector

$("#container"); // jQuery selector

.articles { ... } // css selector

$(".articles"); // jQuery selector


## Level 2 - Traversing the DOM

### Searching the DOM

Searching the DOM

Descendant Selector

Selecting Direct Children

Selecting Multiple Elements

The :first Pseudo Selector

The :even Selector
 

	$("#destinations > li");

Seleciona o primeiro nível de `li`. `li` is children of 'destinations'.

	$(".promo, #france");

Seleciona a classe 'promo' e o id 'france'.

	$("#destinations li:first");
	$("#destinations li:last");

Seleciona o primeiro, e o último 'li' de 'destinations'.

	$("#destinations li:odd");

Seleciona os ímpares.

	$("#destinations li:even");

Seleciona os pares.

### Traversing the DOM

Traversing the DOM

Using find()

Using first()

Using last()

Using prev()

	$("#destinations").find("li");

Procura por 'li' em 'destinations'.

	$("li").first();
	$("li").last();

Procura o primeiro e o último.

	$("li").first().next();
	$("li").first().next().prev();

Procura o próximo (depois do primeiro), e depois procura o anterior.

**Traversing Up**

	$("li").first().parent();

Procura pelo 'pai' de 'li', no caso o 'ul' acima dele.

**Traversing Down**

	$("#destinations").children("li");

Procura por todos 'filhos' de 'destinations', no caso, 'li'.


## Level 3 - Working with the DOM

### Manipulating the DOM

**3.2 Manipulating the DOM**



**3.3 Creating a DOM Node**



**3.4 Adding to the DOM I**

	.append(<element>)
	.prepend(<element>)
	.after(<element>)
	.before(<element>)

**3.5 Adding to the DOM II**

	.appendTo(<element>)
	.prependTo(<element>)
	.insertAfter(<element>)
	.insertBefore(<element>)

**3.6 Removing From the DOM**

 

 
### Acting on Interaction


**3.7 Acting on Interaction**

	$(document).ready(function() {
		// this function runs when the DOM is ready
	});

**3.8 Click Interaction**

	$(document).ready(function() {
		$('button').on('click', function() {
			// run this function on click
		});
	});

**3.9 Acting on Click**

	$(document).ready(function(){
		$('button').on('click', function() {
			var price = $('<p>From $399.99</p>');
			$('.vacation').append(price);
			$('button').remove();
		});
	});

**3.10 On Page Load**



 
### Refactor Using Traversing

**3.11 Refactor Using Traversing**

	$(document).ready(function(){
		$('button').on('click', function() {
			var price = $('<p>From $399.99</p>');
			$('.vacation').append(price);
			$(this).remove();
		});
	});


**3.12 Removing the Clicked Button**

	$(this).remove();


**3.13 Relative Traversing I**

	// $(this).after(price); // NO
	$(this).closest('.vacation').append(price);


**3.14 Relative Traversing II**



**3.15 Relative Traversing III**



 
### Traversing and Filtering

	.data(<name>)
	.data(<name>, <value>)

**3.16 Traversing and Filtering**

	$('.vacation').first().data('price');

Refatorando...

	$(document).ready(function(){
		$('button').on('click', function() {
			var price = $('<p>From $399.99</p>');
			$(this).closest('.vacation').append(price);
			$(this).remove();
		});
	});

... temos

	$(document).ready(function(){
		$('button').on('click', function() {
			var amount = $(this).closest('.vacation').data('price');
			var price = $('<p>From $'+amount+'</p>');
			$(this).closest('.vacation').append(price);
			$(this).remove();
		});
	});


**3.17 Fetching Data From the DOM I**



**3.18 Fetching Data From the DOM II**



**3.19 Refactoring**

	$(document).ready(function(){
		$('button').on('click', function() {
			var vacation = $(this).closest('.vacation');
			var amount = vacation.data('price');
			var price = $('<p>From $'+amount+'</p>');
			vacation.append(price);
			$(this).remove();
		});
	});


**3.20 Better On Handlers**

	$(document).ready(function(){
		$('button').on('click', function() {
			...
			$('.vacation').on('click', 'button', function() {});
		});
	});
	
Event delegation.

**3.21 New Filter I**

Veja os comandos

	.addClass(<class>)
	.removeClass(<class>)

Então

	// find all vacations that are on-sale
	$('#filters').on('click', '.onsale-filter', function() {
		// add a class to these vacations
		$('.vacation').filter('.onsale').addClass('highlighted');
	});


**3.22 New Filter II**

	$('#filters').on('click', '.expiring-filter', function() {
		$('.vacation').filter('.expiring').addClass('highlighted');
	});


**3.23 New Filter III**



## Level 4 - Listening to DOM Events

### On DOM Load

	$('.confirmation').on('click', 'button', function(){
		...		
	});

**4.2 On DOM Load**

	$('.confirmation').on('click', 'button', function(){
		$(this).closest('.confirmation').find('.ticket')		
	});


**4.3 On Load I**

2 commands

	.slideDown()
	.slideUp()
	.slideToggle()


**4.4 On Load II**



**4.5 Slide Effect I**

	$('.confirmation').on('click', 'button', function(){
		$(this).closest('.confirmation').find('.ticket').slideDown();
	});

Alert

	alert($('button').length);

**4.6 Slide Effect II**



 
### Expanding on on()

	$(document).ready(function(){
		$('.confirmation').on('click', 'button', function(){
			$(this).closest('.confirmation').find('.ticket').slideDown();
		});
		$('.confirmation').on('?', 'button', function(){
			$(this).closest('.confirmation').find('.ticket').slideDown();
		});
	});

**4.7 Expanding on on()**

Mouse Events

* click
* dblclick
* focusin
* focusout
* mousedown
* mouseup
* mousemove
* mouseout
* mouseover
* mouseleave
* mouseenter

Então nosso código fica assim:

	$(document).ready(function(){
		$('.confirmation').on('click', 'button', function(){
			$(this).closest('.confirmation').find('.ticket').slideDown();
		});
		$('.confirmation').on('mouseenter', 'button', function(){
			$(this).closest('.confirmation').find('.ticket').slideDown();
		});
	});


**4.8 Mouseover I**


**4.9 Mouseover II**



**4.10 Mouseleave**



**4.11 Named Functions**

Separe os comandos numa nova função

	function showTicket() {
		$(this).closest('.confirmation').find('.ticket').slideDown();
	}


 
### Keyboard Events

**4.12 Keyboard Events**

Keyboard Events (http://api.jquery.com/category/events/keyboard-events/)

	keypress
	keydown
	keyup

Form Events (http://api.jquery.com/category/events/form-events/)

	blur
	focus
	select
	submit
	change


**4.13 Keyup Event**

	$('vacation').on('keyup', 'quantity', function() {
		// Get the price for this vacation
		// Get the quantity entered
		// Set the total to price * quantity
	});

Veja que o código a seguir retorna uma string

	var price = $(this).closest('.vacation').data('price');
	'399.99'

Então, use o sinal + para converter para inteiro

	var price = +$(this).closest('.vacation').data('price');
	399.99

Então temos
 
	$('vacation').on('keyup', 'quantity', function() {
		// Get the price for this vacation
		var price = +$(this).closest('.vacation').data('price');
		// Get the quantity entered
		// Set the total to price * quantity
	});

Veja os comandos

	.val(<new value>)
	.val()

A quantidade fica assim

	var quantity = +$(this).val();

E o total

	$('#total').text(price * quantity);

**4.14 Keyup Event Handler I**



**4.15 Keyup Event Handler II**



**4.16 Another Event Handler**



 
### Link Layover

**4.17 Link Layover**



**4.18 Link Events I**



**4.19 Link Events II**



**4.20 Event Parameter I**



**4.21 Event Parameter II**


## Level 5 - Styling

### Taming CSS

**5.2 Taming CSS**



**5.3 CSS I**



**5.4 CSS II**



**5.5 Show Photo**



**5.6 Refactoring to CSS**



 
### Animation

**5.7 Animation**



**5.8 Animate I**



**5.9 Animate II**



**5.10 Animation Speed**



**5.11 Animate III**





## Links

http://lethain.com/using-jquery-django-autocomplete-fields/