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



**3.5 Adding to the DOM II**



**3.6 Removing From the DOM**



 
### Acting on Interaction

**3.7 Acting on Interaction**



**3.8 Click Interaction**



**3.9 Acting on Click**



**3.10 On Page Load**



 
### Refactor Using Traversing

**3.11 Refactor Using Traversing**



**3.12 Removing the Clicked Button**



**3.13 Relative Traversing I**



**3.14 Relative Traversing II**



**3.15 Relative Traversing III**



 
### Traversing and Filtering

**3.16 Traversing and Filtering**



**3.17 Fetching Data From the DOM I**



**3.18 Fetching Data From the DOM II**



**3.19 Refactoring**



**3.20 Better On Handlers**



**3.21 New Filter I**



**3.22 New Filter II**



**3.23 New Filter III**




## Links

http://lethain.com/using-jquery-django-autocomplete-fields/