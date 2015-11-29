// get_data on jQuery version
function get_customers() {
	$.ajax({
		url: 'http://inorthwind.azurewebsites.net/Service1.svc/getAllCustomers',
		type: 'GET',
		dataType: 'json',
		before: function(){
			console.log('Carregando');
		},
		success: function(data){
			$.each(data.GetAllCustomersResult, function(index, value){
				console.log(value.City);
			});
		},
		error: function(){
			alert('Deu Erro');
		}
	});
};

$(document).ready(function(){
	$('#get_data').click(function(e){
		get_customers()
	});
});