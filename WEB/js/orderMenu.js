var restaurantId = '';
var menu = '';
var dishes = [];
	
function updateTotal(){

	var subtotal = 0;
	for (var i = 0; i < dishes.length; i++) {
		subtotal += dishes[i].getQuantity() * dishes[i].dish.getPrice();
	};



	var tempTps = subtotal * TPS;
	var tempTvq = subtotal * TVQ;
	var total = subtotal + tempTps + tempTvq;

	document.getElementById('subTotal').innerHTML = subtotal.toFixed(2);
	document.getElementById('tps').innerHTML = tempTps.toFixed(2);
	document.getElementById('tvq').innerHTML = tempTvq.toFixed(2);
	document.getElementById('total').innerHTML = total.toFixed(2);
}

function fillDishTable(){
	if(window.location.search.indexOf('?Id=') == 0){
		restaurantId = window.location.search.substring(4);
		
		menu = getMenuFromRestaurantId(restaurantId);

		if(menu === null){
			window.location="restaurant";
		}
		else{
			dishes = getDishesFromMenuId(menu["Id"]);

			var dishTable = new DishTable(document.getElementById("dishesTable"),true);
			for (var i = 0; i < dishes.length; i++) {
				var row = dishTable.addRow(dishes[i]);
				var input = row.getQteInput();
				input.onkeyup = function(){
					updateTotal();
				}

				dishes[i] = row;
			};
		}
	}
}

function createOrder(){
	var orderInfo ={
		"Username" : getUsername(),
		"RestaurantId" : restaurantId,
		"MenuId" : menu["Id"],
		"Dishes" : []
	};

	for (var i = 0; i < dishes.length; i++) {
		if(dishes[i].getQuantity() !== 0 && dishes[i].getQuantity() !== "0"){
			orderInfo["Dishes"].push({
				"DishId" : dishes[i].dish.getId(),
				"Name" : dishes[i].dish.getName(),
				"Price" : dishes[i].dish.getPrice(),
				"Description" : dishes[i].dish.getDescription(),
				"Quantity" : dishes[i].getQuantity()

			});
		}
	};

	if(orderInfo["Dishes"].length != 0){

		document.cookie = "order=" + JSON.stringify(orderInfo);

		window.location = "orderSummary";
	}
	else{
		var mess = new MessageBox();
		mess.show(3,"La commande ne contient aucun aliment");
	}
 }