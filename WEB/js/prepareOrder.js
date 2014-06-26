window.onload = function(){
	var orderTable = new OrderTable(document.getElementById('OrderTable'));

	var order = getAllOrder();
	
	for (var i = 0; i < order.length; i++) {
		orderTable.addRow(order[i]);
	};
}


function getOrdersByRestaurantManager(){

}

function getAllOrder(){
	var orders = [];

	$.ajax({
		type:"GET",
		url: API_URL + 'orders',
		contentType:"application/json",
		async:false,
		success:function(data){
			
			orders = data;
		}

	});

	return orders;
}

function updateOrderStatus(orderId,newStatus){
	var success = true;

	var info = JSON.stringify({
		"OrderId" : String(orderId),
		"Status" : newStatus
	});

	$.ajax({
		type:"POST",
		url: API_URL + 'orders/status',
		contentType:"application/json",
		data : info,
		async:false,
		success:function(data){

		},
		error:function(data){
			success = false;
		}

	});

	return success;
}

