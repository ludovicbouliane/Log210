var dishTable = new DishTable(document.getElementById('dishList'),false);
var menuId = '';

///////////////////////////////////////////////////////////////////////////////////////////////////
// Local dish modification method

// Takes value of the interface and calls add Dish
function newDish(){

	var info = {
		'Id' : "1",
		'Name' : document.getElementById('name').value,
		'Price' : document.getElementById('price').value,
		'Description' : document.getElementById('description').value
	};	

	var dishShouldBeAdded = false;

	if(info["Name"].trim() === ''){
		var mess = new MessageBox();
		mess.show(3,"Le plat doit avoir un nom");
	}
	else if(info["Price"].trim() === ''){
		var mess = new MessageBox();
		mess.show(3,"Le plat doit avoir un prix");
	}
	else if(info["Description"].trim() === ''){
		var mess = new MessageBox();
		mess.show(2,"Le plat ajouté n'avait pas de description");
		dishShouldBeAdded = true;
	}
	else{
		dishShouldBeAdded = true;
	}

	if(dishShouldBeAdded){
		desactivateAllRows();
		addDish(info);
		emptyDishInfo();

		$('#name').focus();
		activateButton();
	}
}

// Adds a dish to the interface and to the list of dishes
function addDish(info){
	dishTable.addRow(info);
}

function editDish(){
	var activeRow = dishTable.getActiveRow();

	activeRow.dish.updateInfo({
		'Id' : activeRow.dish.getId(),
		'Name' : document.getElementById('name').value,
		'Price' : document.getElementById('price').value,
		'Description' : document.getElementById('description').value
	});	

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

// If no row is active in the table the user can't modify or delete a dish.
// else the user can add, edit or delete a dish.
function activateButton(){

	if(dishTable.isOneRowActive()){
		document.getElementById('btn_edit').disabled = false;
		document.getElementById('btn_delete').disabled = false;
	}
	else{
		document.getElementById('btn_edit').disabled = true;
		document.getElementById('btn_delete').disabled = true;
	}
}

function desactivateAllRows(){
	dishTable.desactivateAllRows();
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Event

function onRestaurantChanged(){
	var restaurantId = document.getElementById('listRestaurant').value;

	menuId = '';

	if(restaurantId == ''){
		emptyMenuPage();
		emptyDishTable();
		activateButton();
	}
	else{
		var menu = getMenuFromRestaurantId(restaurantId);

		if(menu !== null){
			menuId = menu["Id"];
			document.getElementById('menuName').value = menu["Name"];			

			emptyDishTable();
			
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

	for (var i = 0; i < dishTable.rows.length; i++) {
		info["Dishes"].push({
			"Id" : dishTable.rows[i].dish.getId(),
			"Name" : dishTable.rows[i].dish.getName(),
			"Price" : dishTable.rows[i].dish.getPrice(),
			"Description" : dishTable.rows[i].dish.getDescription()
		});
	};

	info = JSON.stringify(info);

	$.ajax({
		type:"PUT",
		url: API_URL + 'menus',
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
		"MenuId" : menuId,
		"Name" : document.getElementById('menuName').value,
		"Dishes" : new Array()
	};

	for (var i = 0; i < dishTable.rows.length; i++) {
		info["Dishes"].push({
			"Id" : dishTable.rows[i].dish.getId(),
			"Name" : dishTable.rows[i].dish.getName(),
			"Price" : dishTable.rows[i].dish.getPrice(),
			"Description" : dishTable.rows[i].dish.getDescription()
		});
	};

	info =  JSON.stringify(info);

	$.ajax({
		type:"POST",
		url: API_URL + 'menus',
		contentType:"application/json",
		data: info,
		success:function(data){
			var mess = new MessageBox();
			mess.show(1,"Menu mis à jour");
		}

	});
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
function fillDishInfo(dish){
	document.getElementById('name').value = dish.getName();
	document.getElementById('price').value = dish.getPrice();
	document.getElementById('description').value = dish.getDescription();
}

function emptyMenuPage(){
	document.getElementById('menuName').value = "";
	emptyDishInfo();
}

function emptyDishTable(){
	dishTable.emptyTable();
}