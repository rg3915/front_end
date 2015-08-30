CustomersApi = { // backend
	get_customers: function() {
		var promise = $.ajax({
			url: 'http://inorthwind.azurewebsites.net/Service1.svc/getAllCustomers',
			type: 'GET',
			dataType: 'json',
		});
		promise.error(function(e) {
			alert('Erro: ' + e);
		});
		return promise;
	}
}

TelaListaClientes = { // tela
	popula_tabela_clientes: function(customers) {
		$('tbody').empty(); // limpa a tela
		for (var i = 0; i < customers.length; i++) {
			var customer = customers[i];
			var html = '<tr>';
			html += '<td>' + customer.City + '</td>';
			html += '<td>' + customer.CompanyName + '</td>';
			html += '<td>' + customer.CustomerID + '</td>';
			html += '</tr>';
			$('tbody').append(html);
		};
	}
}

$(document).ready(function(){
	$('#get_data').click(function(e){
		CustomersApi.get_customers().success(function(res){
			TelaListaClientes.popula_tabela_clientes(res.GetAllCustomersResult);
		});
	});
});