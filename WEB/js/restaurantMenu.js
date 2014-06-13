var dishTable = document.getElementById('dishList');
var listDishes = new Array();
var menuId = '';

///////////////////////////////////////////////////////////////////////////////////////////////////
// Local dish modification method

// Takes value of the interface and calls add Dish
function newDish(){

	desactivateAllRows();

	var info = {
		'Id' : "1",
		'Name' : document.getElementById('name').value,
		'Price' : document.getElementById('price').value,
		'Description' : document.getElementById('description').value
	};	

	addDish(info);
	emptyDishInfo();

	$('#name').focus();
	activateButton();
}

// Adds a dish to the interface and to the list of dishes
function addDish(info){

	var dish = new Dish(dishTable);	
	dish.setInfo(info);

	listDishes.push(dish);
}

function editDish(){
	var activeRow = getActiveRow();
	
	activeRow.info = {
		'Id' : activeRow.info["Id"],
		'Name' : document.getElementById('name').value,
		'Price' : document.getElementById('price').value,
		'Description' : document.getElementById('description').value
	};	

	activeRow.updateRow();
}

//Deletes a dish
function deleteDish(){
	var activeRow = getActiveRow();

	if(activeRow !== null){
		activeRow.deleteDish();
		listDishes.splice(listDishes.indexOf(activeRow),1);
		emptyDishInfo();
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Dish table methods

//Desactivate all rows of the dishes table
function desactivateAllRows(){
	for (var i = 0; i < listDishes.length; i++) {
		listDishes[i].desactivateRow();
	}
}

// Returns true if a dish is active in the table of dishes
function isOneRowActive(){
	var anyActive = false;
	for (var i = 0; i < listDishes.length; i++) {
		if(listDishes[i].active === true){
			anyActive = true;
			break;
		}
	}	

	return anyActive;
}

// Gets the active row in the table of dishes. If none is selected 
//	and this is called, null will be returned. If used properlly this 
//	method never should return null.
function getActiveRow(){
	var activeRow = null;

	for (var i = 0; i < listDishes.length; i++) {
		if(listDishes[i].active === true){
			activeRow = listDishes[i];
			break;
		}
	}	

	return activeRow;
}

// If no row is active in the table the user can't modify or delete a dish.
// else the user can add, edit or delete a dish.
function activateButton(){

	if(isOneRowActive()){
		document.getElementById('btn_edit').disabled = false;
		document.getElementById('btn_delete').disabled = false;
	}
	else{
		document.getElementById('btn_edit').disabled = true;
		document.getElementById('btn_delete').disabled = true;
	}
}



///////////////////////////////////////////////////////////////////////////////////////////////////
// Event

function onRestaurantChanged(){
	var restaurantId = document.getElementById('listRestaurant').value;

	menuId = '';

	if(restaurantId == ''){
		emptyMenuPage();
		emptyDishList();
		activateButton();
	}
	else{
		var menu = getMenuFromRestaurantId(restaurantId);

		if(menu !== null){
			menuId = menu["Id"];
			document.getElementById('menuName').value = menu["Name"];			

			emptyDishList();

			var dishes = getDishesFromMenuId(menu["Id"]);

			for (var i = 0; i < dishes.length; i++) {
				addDish(dishes[i]);
			};

		}
	}
}

function onSaveMenuClick(){
	if(document.getElementById('listRestaurant').value !== ''){
		if(document.getElementById('menuName').value.trim() !== '' ){
			if(menuId == ''){
				addMenu();
			}
			else{
				editMenu();
			}
		}
		else{
			var mess = new MessageBox();
			mess.show(3,"Aucun nom de menu saisit");	
		}
	}
	else{
		var mess = new MessageBox();
		mess.show(3,"Aucun restaurant sélectionné");
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// API calls

function addMenu(){
	var info = {
		"RestaurantId" : document.getElementById('listRestaurant').value,
		"Name" : document.getElementById('menuName').value,
		"Dishes" : new Array()
	};

	for (var i = 0; i < listDishes.length; i++) {
		info["Dishes"].push(listDishes[i].info);
	};

	info = JSON.stringify(info);

	$.ajax({
		type:"PUT",
		url: API_URL + 'menu',
		contentType:"application/json",
		data: info,
		success:function(data){
			var mess = new MessageBox();
			mess.show(1,"Menu sauvegardé");
		}

	});
}

function editMenu(){
	var info = {
		"MenuId" : document.getElementById('MenuId').value,
		"Name" : document.getElementById('menuName').value,
		"Dishes" : new Array()
	};

	for (var i = 0; i < listDishes.length; i++) {
		info["Dishes"].push(listDishes[i].info);
	};

	info =  JSON.stringify(info);

	$.ajax({
		type:"POST",
		url: API_URL + 'menu',
		contentType:"application/json",
		data: info,
		success:function(data){
			var mess = new MessageBox();
			mess.show(1,"Menu mis à jour");
		}

	});
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Getter

//If null is returned no menu exist for this restaurant
function getMenuFromRestaurantId(restaurantId){
	var menu = null;

	$.ajax({
		type:"GET",
		url: API_URL + 'restaurants/menu/' + restaurantId,
		contentType:"application/json",
		async:false,
		success:function(data){
			menu = data;
		},
		error: function(data){

		}
	});

	return menu;
}

function getDishesFromMenuId(menuId){
	var dishes = null;

	$.ajax({
		type:"GET",
		url: API_URL + 'menu/dish/' + menuId,
		contentType:"application/json",
		async:false,
		success:function(data){
			dishes = data;
		},
		error: function(data){

		}
	});

	return dishes;
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Filler and emptier

// Empties all fields of the page
function emptyDishInfo(){
	document.getElementById('name').value = "";
	document.getElementById('price').value = "";
	document.getElementById('description').value = "";
}

// Fills all fields for a dish
function fillDishInfo(info){
	document.getElementById('name').value = info["Name"];
	document.getElementById('price').value = info["Price"];
	document.getElementById('description').value = info["Description"];
}

function emptyMenuPage(){
	document.getElementById('menuName').value = "";
	emptyDishInfo();
}

function emptyDishList(){
	for (var i = 0; i < listDishes.length; i++) {
		listDishes[i].deleteDish();
	};
	listDishes = [];
}