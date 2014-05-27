var dishTable = document.getElementById('dishList');
var listDishes = new Array();


function addDish(){
	var info = {
		'Id' : "1",
		'Name' : "test",
		'Price' : "test",
		'Description' : "test"
	};	

	var dish = new Dish(dishTable);	
	dish.setInfo(info);

	listDishes.push(dish);
}

function desactivateAllRows(){
	for (var i = 0; i < listDishes.length; i++) {
		listDishes[i].desactivateRow();
	}
}