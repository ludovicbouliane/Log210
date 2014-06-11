var dishTable = document.getElementById('dishList');
var listDishes = new Array();
var menuId = '';

// Adds a dish
function addDish(){
	var info = {
		'Id' : "1",
		'Name' : document.getElementById('name').value,
		'Price' : document.getElementById('price').value,
		'Description' : document.getElementById('description').value
	};	

	var dish = new Dish(dishTable);	
	dish.setInfo(info);

	listDishes.push(dish);

	emptyDishInfo();
	$('#name').focus();

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


function saveMenu(){
	if(menuId == ''){
		addmenu();
	}
	else{
		editMenu();
	}
}

function addMenu(){

}

function editMenu(){

}