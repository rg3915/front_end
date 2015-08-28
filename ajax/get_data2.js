GetBasketsForCustomer = {
	get_basket_for_customers_json: function() {
		$.ajax({
			url: 'http://inorthwind.azurewebsites.net/Service1.svc/getBasketsForCustomer/ANTON',
			type: 'GET',
			dataType: 'json',
			data: null,
			error: function() {
				alert('Erro');
			},
			success: function(res) {
				// show in console
				console.log(res);
				// console.log(res.GetBasketsForCustomerResult[0].ProductsInBasket[0]);
				// console.log(res.GetBasketsForCustomerResult[1].ProductsInBasket.length);
				// console.log(res.GetBasketsForCustomerResult[0].ProductsInBasket.length);
				for (var i = 0; i < res.GetBasketsForCustomerResult.length; i++) {
					for (var j = 0; j < res.GetBasketsForCustomerResult[i].ProductsInBasket.length; j++) {
						console.log(i, j);
					};
				};
				// show on template
				for (var i = 0; i < res.GetBasketsForCustomerResult.length; i++) {
					var html = '';
					html += '<h3> Pedido: ' + res.GetBasketsForCustomerResult[i]['OrderID'] + '</h3>';
					html += '<h4> Data: ' + res.GetBasketsForCustomerResult[i]['OrderDate'] + '</h4>';
					html += '<table class="table table-striped"><thead><tr><th>ProdutoID</th></tr></thead></table>';

					// for (var j = 0; j < res.GetBasketsForCustomerResult[i].ProductsInBasket.length; j++) {
						// criando a tabela
						// var mythread = '<table class="table table-striped"><thead><tr><th>ProdutoID</th></tr></thead><tbody>';
						// var bask = '<tr>';
						// bask += '<td>' + res.GetBasketsForCustomerResult[i].ProductsInBasket[j]['ProductName'] + '</td>';
						// bask += '<td>' + res.GetBasketsForCustomerResult[i].ProductsInBasket[j]['ProductID'] + '</td>';
						// bask += '<td>' + res.GetBasketsForCustomerResult[i].ProductsInBasket[j]['ProductName'] + '</td>';
						// bask += '<td>' + res.GetBasketsForCustomerResult[i].ProductsInBasket[j]['Quantity'] + '</td>';
						// bask += '<td>' + res.GetBasketsForCustomerResult[i].ProductsInBasket[j]['UnitPrice'] + '</td>';
						// bask += '</tr>';
						// $('div').append(bask);
						// mythread += '</tbody></table>';
						// $('div').append(mythread);
					// };
					// aqui
					$('div').append(html);
				};
			}
		});
	},
};

$(document).ready(function(){
	$('#get_data').click(function(e){
		GetBasketsForCustomer.get_basket_for_customers_json()
	});
});
