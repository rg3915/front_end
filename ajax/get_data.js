GetCustomers = {
	get_customers_json: function() {
		$.ajax({
			url: 'http://inorthwind.azurewebsites.net/Service1.svc/getAllCustomers',
			type: 'GET',
			dataType: 'json',
			data: null,
			error: function() {
				alert('Erro');
			},
			success: function(res) {
				// show in console
				console.log(res);
				for (var i = 0; i < res.GetAllCustomersResult.length; i++) {
					// console.log(res.GetAllCustomersResult[i]['City']);
				};
				// show on template
				for (var i = 0; i < res.GetAllCustomersResult.length; i++) {
					var html = '<tr>';
					html += '<td>' + res.GetAllCustomersResult[i]['City'] + '</td>';
					html += '<td>' + res.GetAllCustomersResult[i]['CompanyName'] + '</td>';
					html += '<td>' + res.GetAllCustomersResult[i]['CustomerID'] + '</td>';
					html += '</tr>';
					$('tbody').append(html)
				};
			}
		});
	},
};

$(document).ready(function(){
	$('#get_data').click(function(e){
		GetCustomers.get_customers_json()
	});
});