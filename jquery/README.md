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




## Links

http://lethain.com/using-jquery-django-autocomplete-fields/